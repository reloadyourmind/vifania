<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('email')
            ->add('emailCanonical')
            ->add('roles')
            ->add('password')
            ->add('plainPassword')
            ->add('passwordRequestedAt')
            ->add('salt')
            ->add('lastLogin')
            ->add('firstname')
            ->add('lastname')
            ->add('username')
            ->add('picture')
            ->add('enabled')
            ->add('superAdmin')
            ->add('confirmationToken')
            ->add('usernameCanonical')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
