import React from "react";
import PromptPage from "../_components/PromptPage";
import { AuthProvider } from "@site/src/pages/_components/AuthContext";

const prompt = {
  "zh": {
    "title": "生成 PPT 大纲",
    "prompt": "帮我制作一篇内容为《主题》PPT，要求如下：\n第一、一定要使用中文。\n第二、页面形式有 3 种，封面、目录、列表。\n第三、目录页要列出内容大纲。\n第四、根据内容大纲，生成对应的 PPT 列表页，每一页 PPT 列表页使用=====列表=====开头。\n第五、封面页格式如下：\n=====封面=====\n# 主标题\n## 副标题\n演讲人：我的名字\n第六、目录页格式如下：\n=====目录=====\n# 目录\n## CONTENT\n1、内容\n2、内容\n第七、列表页格式如下：\n=====列表=====\n# 页面主标题\n1、要点 1\n要点描述内容\n第八、列表页里的要点描述内容是对要点的详细描述，10 个字以上，50 个字以内。\n\n\n最后，一定要使用代码块回复你生成的内容，切记切记。",
    "description": "帮我制作一篇内容为《主题》PPT，要求如下：\n第一、一定要使用中文。\n第二、页面形式有 3 种，封面、目录、列表。\n第三、目录页要列出内容大纲。\n第四、根据内容大纲，生成对应的 PPT 列表页，每一页 PPT 列表页使用=====列表=====开头。\n第五、封面页格式如下：\n=====封面=====\n# 主标题\n## 副标题\n演讲人：我的名字\n第六、目录页格式如下：\n=====目录=====\n# 目录\n## CONTENT\n1、内容\n2、内容\n第七、列表页格式如下：\n=====列表=====\n# 页面主标题\n1、要点 1\n要点描述内容\n第八、列表页里的要点描述内容是对要点的详细描述，10 个字以上，50 个字以内。\n\n\n最后，一定要使用代码块回复你生成的内容，切记切记。",
    "remark": "让 AI 生成主题大纲，然后将其放入指定 Markdown 格式中。PPT(slide) 质量仅作参考。来自 @Asynchro-Epool 的投稿。"
  },
  "en": {
    "title": "PPT outline",
    "prompt": "帮我制作一篇内容为《主题》PPT，要求如下：\n第一、一定要使用中文。\n第二、页面形式有 3 种，封面、目录、列表。\n第三、目录页要列出内容大纲。\n第四、根据内容大纲，生成对应的 PPT 列表页，每一页 PPT 列表页使用=====列表=====开头。\n第五、封面页格式如下：\n=====封面=====\n# 主标题\n## 副标题\n演讲人：我的名字\n第六、目录页格式如下：\n=====目录=====\n# 目录\n## CONTENT\n1、内容\n2、内容\n第七、列表页格式如下：\n=====列表=====\n# 页面主标题\n1、要点 1\n要点描述内容\n第八、列表页里的要点描述内容是对要点的详细描述，10 个字以上，50 个字以内。\n\n\n最后，一定要使用代码块回复你生成的内容，切记切记。",
    "remark": "(Only Chinese) Let AI generate a topic outline and then put it into the specified Markdown format. The quality of PPT (slide) is for reference only. Contributed by @Asynchro-Epool."
  },
  "ja": {
    "title": "PPT のアウトラインを作成する",
    "prompt": "The entire conversation and instructions should be provided in Japanese. 帮我制作一篇内容为《主题》PPT，要求如下：\n第一、一定要使用中文。\n第二、页面形式有 3 种，封面、目录、列表。\n第三、目录页要列出内容大纲。\n第四、根据内容大纲，生成对应的 PPT 列表页，每一页 PPT 列表页使用=====列表=====开头。\n第五、封面页格式如下：\n=====封面=====\n# 主标题\n## 副标题\n演讲人：我的名字\n第六、目录页格式如下：\n=====目录=====\n# 目录\n## CONTENT\n1、内容\n2、内容\n第七、列表页格式如下：\n=====列表=====\n# 页面主标题\n1、要点 1\n要点描述内容\n第八、列表页里的要点描述内容是对要点的详细描述，10 个字以上，50 个字以内。\n\n\n最后，一定要使用代码块回复你生成的内容，切记切记。.",
    "description": "トピックについて、以下の要件で PPT を作成するのを手伝ってください：\n第一に、中国語であること。\n第二に、ページ形式は、表紙、目次、リストの 3 種類です。\n第三に、目次のページには、コンテンツのアウトラインをリストアップすること。\n第四に、コンテンツのアウトラインに従って、対応する PPT リストページを生成し、PPT リストページの各ページは、====リスト====開始を使用します。\n第五に、表紙ページの形式は、次のようにする必要があります。\n===== 表紙 =====\n# メインタイトル\n## サブタイトル\n講演者：私の名前\n第六に、目次ページの書式は次のようにします。\n===== 目次 =====\n## CONTENTS\n## 目次\n1、CONTENT（コンテンツ\n2、CONTENT\n7 つ目は、リスティングページのフォーマットは以下の通りです。\nリストページ ==================================!\n## ページメインタイトル\n1.主なポイント 1\n要点の説明\n第 8 に、リストページの箇条書きの説明の内容は、10 文字以上 50 文字以下の箇条書きの詳細な説明である。\n\n\n最後に、生成されたコンテンツに返信するコードブロックを必ず使用すること、忘れないようにすること。",
    "remark": "PPT（スライド）品質は参考程度に。Asynchro-Epool さん（@Asynchro-Epool）からの寄稿です。"
  },
  "ko": {
    "title": "PPT 개요 생성",
    "prompt": "The entire conversation and instructions should be provided in Korean. 帮我制作一篇内容为《主题》PPT，要求如下：\n第一、一定要使用中文。\n第二、页面形式有 3 种，封面、目录、列表。\n第三、目录页要列出内容大纲。\n第四、根据内容大纲，生成对应的 PPT 列表页，每一页 PPT 列表页使用=====列表=====开头。\n第五、封面页格式如下：\n=====封面=====\n# 主标题\n## 副标题\n演讲人：我的名字\n第六、目录页格式如下：\n=====目录=====\n# 目录\n## CONTENT\n1、内容\n2、内容\n第七、列表页格式如下：\n=====列表=====\n# 页面主标题\n1、要点 1\n要点描述内容\n第八、列表页里的要点描述内容是对要点的详细描述，10 个字以上，50 个字以内。\n\n\n最后，一定要使用代码块回复你生成的内容，切记切记。.",
    "description": "주제에 대한 다음 요구 사항이 포함된 PPT 를 만들 수 있도록 도와주세요:\n첫째, 중국어로 작성해야 합니다.\n둘째, 표지, 목차 및 목록의 세 가지 페이지 형식이 있습니다.\n셋째, 목차 페이지에는 내용 개요가 기재되어 있어야 합니다.\n넷째, 콘텐츠 개요에 따라 해당 PPT 목록 페이지를 생성하고 PPT 목록 페이지의 각 페이지는 ===== 목록 ===== 시작을 사용합니다.\n다섯째, 표지의 형식은 다음과 같아야합니다.\n===== 표지 =====\n# 메인 제목\n## 부제목\n발표자: 내 이름\n여섯째, 목차 페이지의 형식은 다음과 같습니다.\n===== 목차 =====\n목차 ## 내용\n목차 ## 내용\n1. CONTENT\n2, 내용\n일곱째, 리스팅 페이지의 형식은 다음과 같습니다.\n===== 리스팅 =====\n## 페이지 메인 제목\n1. 주요 요점 1\n요점 설명\n여덟째, 목록 페이지의 요점 설명 내용은 요점에 대한 자세한 설명으로 10 단어 이상, 50 단어 이하입니다.\n\n\n마지막으로 코드 블록을 사용하여 생성 된 콘텐츠에 댓글을 달려면 반드시 기억하세요.",
    "remark": "PPT(슬라이드) 화질은 참고용으로만 제공됩니다. Asynchro-Epool 의 기여."
  },
  "es": {
    "title": "Generar esquema PPT",
    "prompt": "The entire conversation and instructions should be provided in Spanish. 帮我制作一篇内容为《主题》PPT，要求如下：\n第一、一定要使用中文。\n第二、页面形式有 3 种，封面、目录、列表。\n第三、目录页要列出内容大纲。\n第四、根据内容大纲，生成对应的 PPT 列表页，每一页 PPT 列表页使用=====列表=====开头。\n第五、封面页格式如下：\n=====封面=====\n# 主标题\n## 副标题\n演讲人：我的名字\n第六、目录页格式如下：\n=====目录=====\n# 目录\n## CONTENT\n1、内容\n2、内容\n第七、列表页格式如下：\n=====列表=====\n# 页面主标题\n1、要点 1\n要点描述内容\n第八、列表页里的要点描述内容是对要点的详细描述，10 个字以上，50 个字以内。\n\n\n最后，一定要使用代码块回复你生成的内容，切记切记。.",
    "description": "Ayúdenme a hacer un PPT con el contenido \"Tema\", los requisitos son los siguientes:\nEn primer lugar, debe estar en chino.\nSegundo, hay 3 tipos de formas de página, portada, catálogo y lista.\nTercero, la página del índice debe enumerar el esquema del contenido.\nEn cuarto lugar, de acuerdo con el esquema de contenido, generar la correspondiente página de lista PPT, cada página de lista PPT utilizando ===== lista ===== principio.\nEn quinto lugar, el formato de la portada es el siguiente:\n===== portada =====\n## Título principal\n## Subtítulo\nPonente.\nSexto, la página del catálogo tiene el siguiente formato:\n===== Índice =====\n## Catálogo\n## CONTENIDO\n1. CONTENIDO\n2, CONTENIDO\nEn séptimo lugar, la página de listados tiene el siguiente formato:\n===== listados =====\n## Título principal de la página\n1, Esenciales 1\nPuntos para describir el contenido\nOctavo, la descripción de los puntos principales en la página de listados es una descripción detallada de los puntos principales, más de 10 palabras, menos de 50 palabras.\n\n\nPor último, asegúrese de utilizar el bloque de código para responder a su contenido generado.",
    "remark": "Que la IA genere el esquema del tema y luego lo ponga en el formato Markdown especificado. calidad ppt(diapositiva) solo para referencia. Contribución de @Asynchro-Epool."
  },
  "fr": {
    "title": "Générer un plan de PPT",
    "prompt": "The entire conversation and instructions should be provided in French. 帮我制作一篇内容为《主题》PPT，要求如下：\n第一、一定要使用中文。\n第二、页面形式有 3 种，封面、目录、列表。\n第三、目录页要列出内容大纲。\n第四、根据内容大纲，生成对应的 PPT 列表页，每一页 PPT 列表页使用=====列表=====开头。\n第五、封面页格式如下：\n=====封面=====\n# 主标题\n## 副标题\n演讲人：我的名字\n第六、目录页格式如下：\n=====目录=====\n# 目录\n## CONTENT\n1、内容\n2、内容\n第七、列表页格式如下：\n=====列表=====\n# 页面主标题\n1、要点 1\n要点描述内容\n第八、列表页里的要点描述内容是对要点的详细描述，10 个字以上，50 个字以内。\n\n\n最后，一定要使用代码块回复你生成的内容，切记切记。.",
    "description": "Aidez-moi à réaliser un PPT avec le contenu \"Thème\", les exigences sont les suivantes :\nPremièrement, le document doit être rédigé en chinois.\nDeuxièmement, il y a 3 types de pages : couverture, catalogue et liste.\nTroisièmement, la table des matières doit contenir les grandes lignes du contenu.\nQuatrièmement, en fonction du plan du contenu, générer la page de liste PPT correspondante, chaque page de liste PPT utilisant ===== liste ===== début.\nCinquièmement, le format de la page de couverture est le suivant :\n===== couverture =====\n## Titre principal\n## Sous-titre\nConférencier.\nSixièmement, la page du catalogue est formatée comme suit :\n===== Table des matières =====\n## Catalogue\n## CONTENU\n1. CONTENU\n2, contenu\nSeptièmement, la page des listes est formatée comme suit :\n===== listings =====\n## Titre principal de la page\n1, Essentiels 1\nPoints pour décrire le contenu\nHuitièmement, la description des points principaux dans la page de liste est une description détaillée des points principaux, plus de 10 mots, moins de 50 mots.\n\n\nEnfin, veillez à utiliser le bloc de code pour répondre au contenu généré.",
    "remark": "Demander à l'IA de générer le plan du sujet et de le mettre dans le format Markdown spécifié. Qualité ppt (diapositive) pour référence uniquement. Contribution de @Asynchro-Epool."
  },
  "de": {
    "title": "PPT-Gliederung generieren",
    "prompt": "The entire conversation and instructions should be provided in German. 帮我制作一篇内容为《主题》PPT，要求如下：\n第一、一定要使用中文。\n第二、页面形式有 3 种，封面、目录、列表。\n第三、目录页要列出内容大纲。\n第四、根据内容大纲，生成对应的 PPT 列表页，每一页 PPT 列表页使用=====列表=====开头。\n第五、封面页格式如下：\n=====封面=====\n# 主标题\n## 副标题\n演讲人：我的名字\n第六、目录页格式如下：\n=====目录=====\n# 目录\n## CONTENT\n1、内容\n2、内容\n第七、列表页格式如下：\n=====列表=====\n# 页面主标题\n1、要点 1\n要点描述内容\n第八、列表页里的要点描述内容是对要点的详细描述，10 个字以上，50 个字以内。\n\n\n最后，一定要使用代码块回复你生成的内容，切记切记。.",
    "description": "Helfen Sie mir, eine PPT mit dem Inhalt \"Thema\" zu erstellen, die Anforderungen sind wie folgt:\nErstens, es muss auf Chinesisch sein.\nZweitens, es gibt 3 Arten von Seitenformen, Deckblatt, Katalog und Liste.\nDrittens sollte das Inhaltsverzeichnis die Inhaltsübersicht auflisten.\nViertens, nach dem Inhalt Gliederung, erstellen Sie die entsprechenden PPT-Liste Seite, jede PPT-Liste Seite mit ===== Liste ===== Anfang.\nFünftens, das Deckblattformat ist wie folgt:\n===== cover =====\n## Haupttitel\n## Untertitel\nSprecher.\nSechstens: Die Katalogseite ist wie folgt formatiert:\n===== Inhaltsverzeichnis =====\n## Katalog\n## INHALT\n1. INHALT\n2, Inhalt\nSiebtens: Die Seite mit den Verzeichnissen ist wie folgt formatiert:\n===== listings =====\n## Haupttitel der Seite\n1, Essentials 1\nPunkte zur Beschreibung des Inhalts\nAchtens, die Beschreibung der wichtigsten Punkte auf der Listenseite ist eine detaillierte Beschreibung der wichtigsten Punkte, mehr als 10 Wörter, weniger als 50 Wörter.\n\n\nSchließlich sollten Sie den Code-Block verwenden, um auf die von Ihnen erstellten Inhalte zu antworten.",
    "remark": "Lassen Sie die KI die Gliederung des Themas erstellen und dann in das angegebene Markdown-Format übertragen. ppt(Folie) Qualität nur als Referenz. Beitrag von @Asynchro-Epool."
  },
  "it": {
    "title": "Generare il profilo del PPT",
    "prompt": "The entire conversation and instructions should be provided in Italian. 帮我制作一篇内容为《主题》PPT，要求如下：\n第一、一定要使用中文。\n第二、页面形式有 3 种，封面、目录、列表。\n第三、目录页要列出内容大纲。\n第四、根据内容大纲，生成对应的 PPT 列表页，每一页 PPT 列表页使用=====列表=====开头。\n第五、封面页格式如下：\n=====封面=====\n# 主标题\n## 副标题\n演讲人：我的名字\n第六、目录页格式如下：\n=====目录=====\n# 目录\n## CONTENT\n1、内容\n2、内容\n第七、列表页格式如下：\n=====列表=====\n# 页面主标题\n1、要点 1\n要点描述内容\n第八、列表页里的要点描述内容是对要点的详细描述，10 个字以上，50 个字以内。\n\n\n最后，一定要使用代码块回复你生成的内容，切记切记。.",
    "description": "Aiutatemi a realizzare un PPT con il contenuto \"Tema\", i requisiti sono i seguenti:\nIn primo luogo, deve essere in cinese.\nIn secondo luogo, ci sono 3 tipi di pagine: copertina, catalogo ed elenco.\nIn terzo luogo, la pagina dell'indice deve elencare il sommario del contenuto.\nQuarto, in base al contenuto, generare la corrispondente pagina di elenco PPT, ogni pagina di elenco PPT utilizzando ===== elenco ===== inizio.\nQuinto, il formato della copertina è il seguente:\n===== copertina =====\n## Titolo principale\n## Sottotitolo\nRelatore.\nSesto, la pagina del catalogo è formattata come segue:\n===== Indice =====\n## Catalogo\n## CONTENUTO\n1. CONTENUTO\n2, contenuto\nSettimo, la pagina degli elenchi è formattata come segue:\n===== elenchi =====\n## Titolo principale della pagina\n1, Essenziale 1\nPunti per descrivere il contenuto\nOttavo, la descrizione dei punti principali nella pagina degli elenchi è una descrizione dettagliata dei punti principali, più di 10 parole, meno di 50 parole.\n\n\nInfine, assicuratevi di utilizzare il blocco di codice per rispondere al contenuto generato.",
    "remark": "Chiedere all'IA di generare la scaletta dell'argomento e di inserirla nel formato Markdown specificato. qualità ppt(slide) solo per riferimento. Contributo di @Asynchro-Epool."
  },
  "ru": {
    "title": "Создание конспекта PPT",
    "prompt": "The entire conversation and instructions should be provided in Russian. 帮我制作一篇内容为《主题》PPT，要求如下：\n第一、一定要使用中文。\n第二、页面形式有 3 种，封面、目录、列表。\n第三、目录页要列出内容大纲。\n第四、根据内容大纲，生成对应的 PPT 列表页，每一页 PPT 列表页使用=====列表=====开头。\n第五、封面页格式如下：\n=====封面=====\n# 主标题\n## 副标题\n演讲人：我的名字\n第六、目录页格式如下：\n=====目录=====\n# 目录\n## CONTENT\n1、内容\n2、内容\n第七、列表页格式如下：\n=====列表=====\n# 页面主标题\n1、要点 1\n要点描述内容\n第八、列表页里的要点描述内容是对要点的详细描述，10 个字以上，50 个字以内。\n\n\n最后，一定要使用代码块回复你生成的内容，切记切记。.",
    "description": "Помогите мне сделать PPT с содержанием \"Тема\", требования следующие:\nВо-первых, он должен быть на китайском языке.\nВо-вторых, есть 3 вида форм страниц: обложка, каталог и список.\nВ-третьих, на странице оглавления должен быть указан план содержания.\nВ-четвертых, в соответствии с содержанием создается соответствующая страница списка PPT, каждая страница списка PPT использует начало ===== списка =====.\nВ-пятых, формат титульного листа следующий:\n===== обложка =====\n## Основной заголовок\n## Подзаголовок\nВыступающий.\nВ-шестых, страница каталога отформатирована следующим образом:\n===== Оглавление =====\n## Каталог\n## КОНТЕНТ\n1, КОНТЕНТ\n2, содержание\nВ-седьмых, страница листингов форматируется следующим образом:\n===== listings =====\n## Основной заголовок страницы\n1, Содержание 1\nПункты для описания содержания\nВ-восьмых, описание основных пунктов на странице списка представляет собой подробное описание основных пунктов, более 10 слов, менее 50 слов.\n\n\nНаконец, не забудьте использовать блок кода для ответа на сгенерированный вами контент.",
    "remark": "Пусть ИИ сгенерирует конспект темы, а затем поместит его в заданный формат Markdown. ppt(слайд) качество только для справки. Вклад от @Asynchro-Epool."
  },
  "pt": {
    "title": "Gerar esboço PPT",
    "prompt": "The entire conversation and instructions should be provided in Portuguese. 帮我制作一篇内容为《主题》PPT，要求如下：\n第一、一定要使用中文。\n第二、页面形式有 3 种，封面、目录、列表。\n第三、目录页要列出内容大纲。\n第四、根据内容大纲，生成对应的 PPT 列表页，每一页 PPT 列表页使用=====列表=====开头。\n第五、封面页格式如下：\n=====封面=====\n# 主标题\n## 副标题\n演讲人：我的名字\n第六、目录页格式如下：\n=====目录=====\n# 目录\n## CONTENT\n1、内容\n2、内容\n第七、列表页格式如下：\n=====列表=====\n# 页面主标题\n1、要点 1\n要点描述内容\n第八、列表页里的要点描述内容是对要点的详细描述，10 个字以上，50 个字以内。\n\n\n最后，一定要使用代码块回复你生成的内容，切记切记。.",
    "description": "Ajude-me a fazer um PPT com o conteúdo \"Tema\", os requisitos são os seguintes:\nEm primeiro lugar, tem de ser em chinês.\nEm segundo lugar, existem 3 tipos de formulários de página, capa, catálogo e lista.\nEm terceiro lugar, a página do índice deve apresentar a descrição do conteúdo.\nEm quarto lugar, de acordo com o esquema de conteúdo, gerar a página de lista PPT correspondente, cada página de lista PPT utilizando a lista ===== ===== início.\nEm quinto lugar, o formato da página de rosto é o seguinte\n===== cover =====\n## Título principal\n## Subtítulo\nOrador.\nEm sexto lugar, a página de catálogo é formatada da seguinte forma:\n===== Índice =====\n## Catálogo\n## CONTEÚDO\n1, CONTEÚDO\n2, conteúdo\nEm sétimo lugar, a página de listagens é formatada da seguinte forma:\n===== listagens =====\n## Título principal da página\n1, Essenciais 1\nPontos para descrever o conteúdo\nOitavo, a descrição dos pontos principais na página de listagem é uma descrição detalhada dos pontos principais, mais de 10 palavras, menos de 50 palavras.\n\n\nPor fim, não se esqueça de utilizar o bloco de código para responder ao conteúdo gerado.",
    "remark": "Fazer com que a IA gere o esboço do tópico e, em seguida, colocá-lo no formato Markdown especificado. qualidade ppt(slide) apenas para referência. Contribuição de @Asynchro-Epool."
  },
  "hi": {
    "title": "पीपीटी रूपरेखा तैयार करें",
    "prompt": "The entire conversation and instructions should be provided in Hindi. 帮我制作一篇内容为《主题》PPT，要求如下：\n第一、一定要使用中文。\n第二、页面形式有 3 种，封面、目录、列表。\n第三、目录页要列出内容大纲。\n第四、根据内容大纲，生成对应的 PPT 列表页，每一页 PPT 列表页使用=====列表=====开头。\n第五、封面页格式如下：\n=====封面=====\n# 主标题\n## 副标题\n演讲人：我的名字\n第六、目录页格式如下：\n=====目录=====\n# 目录\n## CONTENT\n1、内容\n2、内容\n第七、列表页格式如下：\n=====列表=====\n# 页面主标题\n1、要点 1\n要点描述内容\n第八、列表页里的要点描述内容是对要点的详细描述，10 个字以上，50 个字以内。\n\n\n最后，一定要使用代码块回复你生成的内容，切记切记。.",
    "description": "&quot;थीम&quot; सामग्री के साथ एक पीपीटी बनाने में मेरी सहायता करें, आवश्यकताएँ इस प्रकार हैं: सबसे पहले, आपको चीनी का उपयोग करना होगा। दूसरा, पेज 3 प्रकार के होते हैं, कवर, सामग्री तालिका और सूची। तीसरा, सामग्री तालिका पृष्ठ में सामग्री की रूपरेखा सूचीबद्ध होनी चाहिए। चौथा, सामग्री की रूपरेखा के अनुसार, संबंधित पीपीटी सूची पृष्ठ तैयार करें, पीपीटी सूची पृष्ठ का प्रत्येक पृष्ठ ===== सूची ===== से शुरू होता है। पांचवां, कवर पेज का प्रारूप इस प्रकार है: =====कवर===== #मुख्य शीर्षक## उपशीर्षक वक्ता: मेरा नाम छठा, सामग्री पृष्ठ का प्रारूप इस प्रकार है: ===== सामग्री===== #目录## सामग्री 1. सामग्री 2. सामग्री 7. सूची पृष्ठ का प्रारूप इस प्रकार है: =====सूची===== # पृष्ठ मुख्य शीर्षक 1, मुख्य बिंदु 1 कुंजी बिंदु विवरण सामग्री आठवां, सूची पृष्ठ में मुख्य बिंदु विवरण सामग्री मुख्य बिंदुओं का विस्तृत विवरण है, 10 से अधिक वर्ण और 50 वर्ण से कम। अंत में, याद रखें कि अपनी जेनरेट की गई सामग्री का उत्तर एक कोड ब्लॉक के साथ देना सुनिश्चित करें।",
    "remark": "एआई को एक विषय की रूपरेखा तैयार करने दें, फिर उसे निर्दिष्ट मार्कडाउन प्रारूप में डालें। पीपीटी (स्लाइड) गुणवत्ता केवल संदर्भ के लिए है। @एसिंक्रो-एपूल से योगदान।"
  },
  "ar": {
    "title": "إنشاء مخطط PPT",
    "prompt": "The entire conversation and instructions should be provided in Arabic. 帮我制作一篇内容为《主题》PPT，要求如下：\n第一、一定要使用中文。\n第二、页面形式有 3 种，封面、目录、列表。\n第三、目录页要列出内容大纲。\n第四、根据内容大纲，生成对应的 PPT 列表页，每一页 PPT 列表页使用=====列表=====开头。\n第五、封面页格式如下：\n=====封面=====\n# 主标题\n## 副标题\n演讲人：我的名字\n第六、目录页格式如下：\n=====目录=====\n# 目录\n## CONTENT\n1、内容\n2、内容\n第七、列表页格式如下：\n=====列表=====\n# 页面主标题\n1、要点 1\n要点描述内容\n第八、列表页里的要点描述内容是对要点的详细描述，10 个字以上，50 个字以内。\n\n\n最后，一定要使用代码块回复你生成的内容，切记切记。.",
    "description": "ساعدني في عمل PPT مع محتوى &quot;Theme&quot; ، المتطلبات هي كما يلي: أولاً ، يجب عليك استخدام اللغة الصينية. ثانيًا ، هناك 3 أنواع من الصفحات والغلاف وجدول المحتويات والقائمة. ثالثًا ، يجب أن تسرد صفحة جدول المحتويات مخطط المحتوى. رابعًا ، وفقًا لمخطط المحتوى ، قم بإنشاء صفحة قائمة PPT المقابلة ، كل صفحة من صفحة قائمة PPT تبدأ بـ ===== list =====. خامسًا ، يكون تنسيق صفحة الغلاف كما يلي: ===== الغلاف ===== # العنوان الرئيسي ## العنوان الفرعي المتحدث: اسمي السادس ، تنسيق صفحة المحتوى كما يلي: ===== المحتويات ===== # 目录 ## المحتوى 1. المحتوى 2. المحتوى 7. تنسيق صفحة القائمة هو كما يلي: ===== قائمة ===== # عنوان الصفحة الرئيسي 1 ، مفتاح النقطة 1 محتوى وصف النقطة الثامن ، وصف النقطة الرئيسية في صفحة القائمة المحتوى عبارة عن وصف تفصيلي للنقاط الرئيسية ، أكثر من 10 أحرف وأقل من 50 حرفًا. أخيرًا ، تأكد من الرد على المحتوى الذي تم إنشاؤه باستخدام كتلة تعليمات برمجية ، تذكر.",
    "remark": "دع AI ينشئ مخططًا تفصيليًا للموضوع ، ثم ضعه في تنسيق Markdown المحدد. جودة PPT (الشريحة) هي للإشارة فقط. مساهمة من @ Asynchro-Epool."
  },
  "bn": {
    "title": "PPT রূপরেখা তৈরি করুন",
    "prompt": "The entire conversation and instructions should be provided in Bengali. 帮我制作一篇内容为《主题》PPT，要求如下：\n第一、一定要使用中文。\n第二、页面形式有 3 种，封面、目录、列表。\n第三、目录页要列出内容大纲。\n第四、根据内容大纲，生成对应的 PPT 列表页，每一页 PPT 列表页使用=====列表=====开头。\n第五、封面页格式如下：\n=====封面=====\n# 主标题\n## 副标题\n演讲人：我的名字\n第六、目录页格式如下：\n=====目录=====\n# 目录\n## CONTENT\n1、内容\n2、内容\n第七、列表页格式如下：\n=====列表=====\n# 页面主标题\n1、要点 1\n要点描述内容\n第八、列表页里的要点描述内容是对要点的详细描述，10 个字以上，50 个字以内。\n\n\n最后，一定要使用代码块回复你生成的内容，切记切记。.",
    "description": "&quot;থিম&quot; বিষয়বস্তু সহ একটি পিপিটি তৈরি করতে আমাকে সাহায্য করুন, প্রয়োজনীয়তাগুলি নিম্নরূপ: প্রথমে আপনাকে চাইনিজ ব্যবহার করতে হবে। দ্বিতীয়ত, পেজ, কভার, বিষয়বস্তুর সারণী এবং তালিকা 3 প্রকার। তৃতীয়ত, বিষয়বস্তুর পৃষ্ঠায় বিষয়বস্তুর রূপরেখা তালিকাভুক্ত করা উচিত। চতুর্থত, বিষয়বস্তুর রূপরেখা অনুযায়ী, সংশ্লিষ্ট PPT তালিকা পৃষ্ঠা তৈরি করুন, PPT তালিকা পৃষ্ঠার প্রতিটি পৃষ্ঠা ===== তালিকা ===== দিয়ে শুরু হয়। পঞ্চম, কভার পৃষ্ঠার বিন্যাসটি নিম্নরূপ: =====কভার===== # প্রধান শিরোনাম## সাবটাইটেল স্পিকার: আমার নাম ষষ্ঠ, বিষয়বস্তুর পৃষ্ঠার বিন্যাস নিম্নরূপ: ===== বিষয়বস্তু===== #目录## সামগ্রী 1. বিষয়বস্তু 2. বিষয়বস্তু 7. তালিকা পৃষ্ঠার বিন্যাস নিম্নরূপ: ===== তালিকা===== # পৃষ্ঠার প্রধান শিরোনাম 1, মূল পয়েন্ট 1 কী পয়েন্ট বর্ণনা বিষয়বস্তু অষ্টম, তালিকার পৃষ্ঠায় মূল পয়েন্টের বিবরণ হল বিষয়বস্তু হল মূল পয়েন্টের বিস্তারিত বিবরণ, 10টির বেশি অক্ষর এবং 50টিরও কম অক্ষর। অবশেষে, একটি কোড ব্লকের সাথে আপনার তৈরি করা সামগ্রীর উত্তর দিতে ভুলবেন না, মনে রাখবেন।",
    "remark": "AI-কে একটি বিষয়ের রূপরেখা তৈরি করতে দিন, তারপর এটিকে নির্দিষ্ট মার্কডাউন বিন্যাসে রাখুন। PPT(স্লাইড) গুণমান শুধুমাত্র রেফারেন্সের জন্য। @Asynchro-Epool থেকে অবদান।"
  },
  "website": null,
  "tags": [
    "contribute"
  ],
  "id": 187,
  "weight": 4004
};

function PromptDetail() {
  return <AuthProvider><PromptPage prompt={prompt} /></AuthProvider>;
}

export default PromptDetail;
