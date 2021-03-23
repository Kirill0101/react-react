from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Account, UploadFileForm, Table, FinalTab
from import_export import resources

from import_export.admin import ImportExportModelAdmin
from importlib import import_module


@admin.register(FinalTab)
class FinalTableAdmin(ImportExportModelAdmin):
    list_display = ('user_name','correct_answer','valuation', 'sentence_id', 'paragraph')
    pass


@admin.register(Table)
class TableAdmin(ImportExportModelAdmin):
    list_display = ('list_id','sentence','clause', 'clause_id', 'answer', 'lemma', 'concept', 'feedback')
    pass


class AccountAdmin(UserAdmin):

    list_display = ('username', 'email', 'is_teacher' )
    search_fields = ('email', 'username', 'name')
    readonly_fields = ('date_joined', 'last_login')

    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()

admin.site.register(Account, AccountAdmin)
