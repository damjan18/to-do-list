from django.urls import path
from .views import TodoDetailView, TodoCreateListView


urlpatterns = [
    path("to-do",TodoCreateListView.as_view(), name="todo-list"),
    path("to-do/<int:pk>", TodoDetailView.as_view(), name="todo-detail")
]