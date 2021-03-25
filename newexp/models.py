from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from django.conf import settings

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)

# Create your models here.

class MyAccountManager(BaseUserManager):
    def create_user(self,email, username, password=None):
        if not email:
            raise ValueError("Error")
        if not username:
            raise ValueError("Error")
        user = self.model(
        email=self.normalize_email(email),
        username = username,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self,email, username, password=None):
        user = self.create_user(
        email=self.normalize_email(email),
        username = username,
        password = password
        )
        user.is_admin = True
        user.is_staff = True
        user.is_active = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

class Account(AbstractBaseUser):

    CHOICES = (
        ('Beg', 'Beginner'),
        ('Int', 'Intermediate'),
        ('Adv', 'Advanced'),

    )

    name = models.CharField(max_length=30)
    email = models.EmailField(verbose_name='email', max_length=60, unique=True)
    username = models.CharField(max_length=30,unique=True)
    date_joined = models.DateTimeField(verbose_name='date joined', auto_now_add=True)
    last_login = models.DateTimeField(verbose_name='last login', auto_now=True)
    is_admin = models.BooleanField(default=False)
    is_teacher = models.BooleanField(default=False)
    experience = models.CharField(max_length=300, choices = CHOICES)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = MyAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.email

    def has_perm(self,perm,obj=None):
        return self.is_admin

    def has_perms(self,perm,obj=None):
        return self.is_admin

    def has_module_perms(self,app_label):
        return True


class Table(models.Model):
    list_id = models.TextField()
    sentence = models.TextField()
    clause = models.TextField()
    clause_id = models.TextField()
    answer = models.TextField()
    lemma = models.TextField()
    concept = models.TextField()
    feedback = models.TextField()
    def __str__(self):
        return self.list_id


class FinalTab(models.Model):

    user_name = models.TextField()
    sentence_id = models.TextField()
    correct_answer = models.TextField()
    valuation = models.TextField()
    paragraph = models.TextField()
    exp_number = models.TextField()

    def __str__(self):
        return self.sentence_id

class UploadFileForm(models.Model):
    title = models.CharField(max_length=50)
    specifications = models.FileField(upload_to='media/', blank=True)

    def __str__(self):
        return self.title
