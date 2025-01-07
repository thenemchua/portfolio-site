from django.urls import include, path
from .views import tsp_solver, generate_cities

urlpatterns = [
    path('tsp/', include('tsp.urls')),
    path('solve/', tsp_solver, name='tsp_solver'),
    path('generate/', generate_cities, name='generate_cities'),
]
