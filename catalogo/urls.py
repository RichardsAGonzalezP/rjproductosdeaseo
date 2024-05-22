from django.urls import path
from . import views
from django.contrib.auth.views import LoginView, LogoutView

urlpatterns = [
    path('', views.index, name='index'),
    path('quienes-somos/', views.quienes_somos, name='quienes_somos'),
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
    path('interes/', views.interes, name='interes'),
    path('profile/', views.profile, name='profile'),
    path('logout_confirm/', views.logout_confirm, name='logout_confirm'),
    path('login/', LoginView.as_view(template_name='catalogo/login.html'), name='login'),
    path('logout/', LogoutView.as_view(next_page='/'), name='logout'),
]
