<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    /**
     * @Route("/", name="home", methods={"GET"})
     */
    public function index(): Response
    {
        return $this->render('base.html.twig', []);
    }

    /**
     * @Route("/posts", name="posts", methods={"GET"})
     */
    public function getAllPosts()
    {
        return $this->json(
            [
                [
                    'img' => 'url(\'https://vifania.by/images/articlethumbs/VAV06578.jpg\')',
                    'title' => 'Водное крещение 5 февраля 2023',
                    'url' => 'https://vifania.by/news/vodnoe-kreshenie-fevralja-2023.html'
                ],
                [
                    'img' => 'url(\'https://vifania.by/images/articlethumbs/resize_1-1639779142.jpg\')',
                    'title' => 'Водное крещение 12 декабря 2021',
                    'url' => 'https://vifania.by/news/vodnoe-kreshenie-2021.html'
                ],
                [
                    'img' => 'url(\'https://vifania.by/images/articlethumbs/resize_1-1620592249.jpg\')',
                    'title' => 'Оглашение Андрея Войницкого и Надежды Шиванкевич',
                    'url' => 'https://vifania.by/news/oglashenie-andreja-vojnickogo-nadezhdy-shivankevich.html'
                ],
                [
                    'img' => 'url(\'https://vifania.by/images/articlethumbs/resize_1-1620590189.jpg\')',
                    'title' => 'Оглашение Алексея Тимченко и Виолетты Полянской',
                    'url' => 'https://vifania.by/news/oglashenie-alekseja-timchenko-violetty-poljanskoj.html'
                ],
                [
                    'img' => 'url(\'https://vifania.by/images/articlethumbs/resize_1-1610551519.jpg\')',
                    'title' => 'Рукоположение на дьяконское служение',
                    'url' => 'https://vifania.by/news/rukopolozhenie-djakonskoe-sluzhenie.html'
                ],
                [
                    'img' => 'url(\'https://vifania.by/images/articlethumbs/resize_1-1606337902.jpg\')',
                    'title' => 'Кто будет веровать и креститься, спасен будет',
                    'url' => 'https://vifania.by/news.html?pid=2&p2_articleid=131'
                ],
                [
                    'img' => 'url(\'https://vifania.by/images/articlethumbs/resize_1-1604264715.jpg\')',
                    'title' => 'Оглашение Марка Сильвановича и Алеси Лютаревич',
                    'url' => 'https://vifania.by/news/oglashenie-marka-silvanovicha-alesi-ljutarevich.html'
                ]
            ]
        );
    }

}
