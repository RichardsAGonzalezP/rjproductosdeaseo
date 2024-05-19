# urls.py en catalogo/
from django.urls import path
from . import views
from django.contrib.auth.views import LogoutView, LoginView

urlpatterns = [
    path('', views.index, name='index'),
    path('quienes-somos/', views.quienes_somos, name='quienes-somos'),
    path('catalogo/', views.catalogo, name='catalogo'),
    path('admin-productos/', views.admin_productos, name='admin_productos'),
    path('crear-producto/', views.crear_producto, name='crear_producto'),
    path('editar-producto/<int:id>/', views.editar_producto, name='editar_producto'),
    path('eliminar-producto/<int:id>/', views.eliminar_producto, name='eliminar_producto'),
    path('eliminar-imagen/<int:id>/', views.eliminar_imagen, name='eliminar_imagen'),
    path('admin-categorias/', views.admin_categorias, name='admin_categorias'),
    path('crear-categoria/', views.crear_categoria, name='crear_categoria'),
    path('editar-categoria/<int:id>/', views.editar_categoria, name='editar_categoria'),
    path('eliminar-categoria/<int:id>/', views.eliminar_categoria, name='eliminar_categoria'),
    path('accounts/profile/', views.profile, name='profile'),
    path('logout/', views.logout_confirm, name='logout'),
    path('login/', LoginView.as_view(template_name='catalogo/login.html'), name='login'),
]
