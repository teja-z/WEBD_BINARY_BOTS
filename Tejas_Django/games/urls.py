from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('rps/', views.rps, name='rps'),
    path('guess/', views.guess, name='guess'),
    path('tictactoe/', views.tictactoe, name='tictactoe'),
]
