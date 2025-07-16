from django.urls import path
from .views import TodoListCreateView, TodoDeleteView


urlpatterns = [
    path("to-do/",TodoListCreateView.as_view()),
    path("to-do/<int:pk>/", TodoDeleteView.as_view(), name="todo-detail"),
]