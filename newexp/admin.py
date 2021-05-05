from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Account, UploadFileForm, Table, FinalTab, Table2, FinalTab2, UserQ, Orden
from import_export import resources

from import_export.admin import ImportExportModelAdmin
from importlib import import_module


@admin.register(FinalTab)
class FinalTableAdmin(ImportExportModelAdmin):
    list_display = ('user_name','n_try','date_time', 'n_id', 'exp_set', 'answer', 'correct_answer', 'answer_rate', 'feedback_rate', 'paragraph_rate')
    pass





@admin.register(UserQ)
class FinalTableAdmin(ImportExportModelAdmin):
    list_display = ('age','sex','language_num', 'school', 'grammar', 'lexic', 'language_other', 'education', 'language_education', 'contact',  'group')
    pass

@admin.register(FinalTab2)
class FinalTableAdmin(ImportExportModelAdmin):
    list_display = ('user_name','n_try','date_time', 'n_id', 'exp_set', 'answer', 'correct_answer', 'answer_rate', 'feedback_rate', 'paragraph_rate')
    pass

@admin.register(Table)
class TableAdmin(ImportExportModelAdmin):
    list_display = ('exp_set','list_id','id','sentence', 'answer', 'lemma', 'feedback')
    pass


@admin.register(Table2)
class TableAdmin(ImportExportModelAdmin):
    list_display = ('exp_set','list_id','id','sentence', 'answer', 'lemma', 'feedback')
    pass



class AccountAdmin(UserAdmin):

    list_display = ('username', 'email', 'is_teacher' )
    search_fields = ('email', 'username', 'name')
    readonly_fields = ('date_joined', 'last_login')

    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()

admin.site.register(Account, AccountAdmin)
admin.site.register(Orden)
