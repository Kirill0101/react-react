from import_export import resources
from .models import Table

class MemberResource(resources.ModelResource):
    class Meta:
        model = Table
