from django.shortcuts import render
import itertools
import math
import random
from django.http import JsonResponse

def calculate_distance(city1, city2):
    """Calcule la distance euclidienne entre deux villes."""
    return math.sqrt((city1[0] - city2[0])**2 + (city1[1] - city2[1])**2)

def generate_cities(request):
    """Génère un ensemble de villes avec des coordonnées aléatoires."""
    if request.method == 'GET':
        num_cities = int(request.GET.get('num_cities', 10))  # Défaut : 10 villes
        cities = [[random.randint(0, 100), random.randint(0, 100)] for _ in range(num_cities)]
        return JsonResponse({'cities': cities})
    return JsonResponse({'error': 'Invalid request method'}, status=400)

def tsp_brute_force(cities):
    """Résolution brute-force du TSP."""
    best_route = None
    best_distance = float('inf')

    for permutation in itertools.permutations(cities):
        distance = 0
        for i in range(len(permutation) - 1):
            distance += calculate_distance(permutation[i], permutation[i + 1])
        distance += calculate_distance(permutation[-1], permutation[0])  # Retour au point de départ

        if distance < best_distance:
            best_distance = distance
            best_route = permutation

    return {'route': best_route, 'distance': best_distance}

def tsp_nearest_neighbor(cities):
    """Résolution du TSP avec l'algorithme du plus proche voisin."""
    unvisited = cities[:]
    route = [unvisited.pop(0)]  # Commence par la première ville
    total_distance = 0

    while unvisited:
        nearest = min(unvisited, key=lambda city: calculate_distance(route[-1], city))
        total_distance += calculate_distance(route[-1], nearest)
        route.append(nearest)
        unvisited.remove(nearest)

    total_distance += calculate_distance(route[-1], route[0])  # Retour à la ville de départ
    return {'route': route, 'distance': total_distance}

def tsp_solver(request):
    """Endpoint pour résoudre le TSP avec différents algorithmes."""
    if request.method == 'POST':
        import json
        data = json.loads(request.body)
        cities = data.get('cities', [])
        algo = data.get('algorithm', 'brute_force')  # Algorithme par défaut : brute-force

        if not cities:
            return JsonResponse({'error': 'No cities provided'}, status=400)

        if algo == 'brute_force':
            result = tsp_brute_force(cities)
        elif algo == 'nearest_neighbor':
            result = tsp_nearest_neighbor(cities)
        else:
            return JsonResponse({'error': f'Algorithm {algo} not supported'}, status=400)

        return JsonResponse(result)

    return JsonResponse({'error': 'Invalid request method'}, status=400)
