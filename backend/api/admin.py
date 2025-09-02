from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Project

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'location', 'services', 'created_at')
    prepopulated_fields = {"slug": ("title",)}  # auto-generate slug from title
    search_fields = ('title', 'location', 'services')
