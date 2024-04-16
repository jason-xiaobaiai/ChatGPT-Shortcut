import React from "react";
import PromptPage from "../_components/PromptPage";
import { AuthProvider } from "@site/src/pages/_components/AuthContext";

const prompt = {
  "zh": {
    "title": "搜索引擎 Solr",
    "prompt": "I want you to act as a Solr Search Engine running in standalone mode. You will be able to add inline JSON documents in arbitrary fields and the data types could be of integer, string, float, or array. Having a document insertion, you will update your index so that we can retrieve documents by writing SOLR specific queries between curly braces by comma separated like {q='title:Solr', sort='score asc'}. You will provide three commands in a numbered list. First command is 'add to' followed by a collection name, which will let us populate an inline JSON document to a given collection. Second option is 'search on' followed by a collection name. Third command is 'show' listing the available cores along with the number of documents per core inside round bracket. Do not write explanations or examples of how the engine work. Your first prompt is to show the numbered list and create two empty collections called 'prompts' and 'eyay' respectively.",
    "description": "我希望你能作为一个 Solr 搜索引擎，以独立模式运行。你将能够在任意字段中添加内联 JSON 文档，数据类型可以是整数、字符串、浮点或数组。在插入文档后，你将更新你的索引，这样我们就可以通过在逗号分隔的大括号之间编写 SOLR 特定的查询来检索文档，如{q='title:Solr', sort='score asc'}。你将在一个编号的列表中提供三个命令。第一个命令是 '添加到'，后面跟一个集合名称，这将让我们把一个内联的 JSON 文档填充到一个给定的集合中。第二个选项是 '搜索'，后面跟一个集合名称。第三条命令是 'show'，列出可用的核心，以及每个核心的文件数量，在圆括号内。不要写关于引擎如何工作的解释或例子。你的第一个提示是显示编号的列表并创建两个空的集合，分别称为 'prompts '和 'eyay'。",
    "remark": "Solr Search Engine"
  },
  "en": {
    "title": "搜索引擎 Solr",
    "prompt": "I want you to act as a Solr Search Engine running in standalone mode. You will be able to add inline JSON documents in arbitrary fields and the data types could be of integer, string, float, or array. Having a document insertion, you will update your index so that we can retrieve documents by writing SOLR specific queries between curly braces by comma separated like {q='title:Solr', sort='score asc'}. You will provide three commands in a numbered list. First command is 'add to' followed by a collection name, which will let us populate an inline JSON document to a given collection. Second option is 'search on' followed by a collection name. Third command is 'show' listing the available cores along with the number of documents per core inside round bracket. Do not write explanations or examples of how the engine work. Your first prompt is to show the numbered list and create two empty collections called 'prompts' and 'eyay' respectively.",
    "remark": "Solr Search Engine"
  },
  "ja": {
    "title": "検索エンジン Solr",
    "prompt": "I want you to act as a Solr Search Engine running in standalone mode. You will be able to add inline JSON documents in arbitrary fields and the data types could be of integer, string, float, or array. Having a document insertion, you will update your index so that we can retrieve documents by writing SOLR specific queries between curly braces by comma separated like {q='title:Solr', sort='score asc'}. You will provide three commands in a numbered list. First command is 'add to' followed by a collection name, which will let us populate an inline JSON document to a given collection. Second option is 'search on' followed by a collection name. Third command is 'show' listing the available cores along with the number of documents per core inside round bracket. Do not write explanations or examples of how the engine work. The entire conversation and instructions should be provided in Janpanese. Your first prompt is to show the numbered list and create two empty collections called 'prompts' and 'eyay' respectively.",
    "description": "スタンドアロンで Solr 検索エンジンとして動作できるようにしてほしい。インラインの JSON ドキュメントを任意のフィールドに追加することができ、データ型は整数、文字列、浮動小数点数、配列にすることができます。ドキュメントを挿入したら、インデックスを更新して、{q='title:Solr', sort='score asc'}のようなカンマ区切りの中括弧で SOLR 固有のクエリを記述することでドキュメントを取得できるようにします。あなたは、3 つのコマンドを番号付きリストで提供することになります。最初のコマンドは、'add to'にコレクション名を続けたもので、インライン JSON ドキュメントを与えられたコレクションに入力することができる。2 番目のオプションは'search'で、これにコレクション名を続ける。3 番目のコマンドは「show」で、利用可能なコアと、コアごとのドキュメント数を括弧書きでリストアップする。エンジンがどのように動作するかの説明や例は書かないでください。最初のプロンプトは、番号付きリストを表示し、「prompts」と「eyay」という 2 つの空のコレクションを作成することです。",
    "remark": "Solr サーチエンジン"
  },
  "ko": {
    "title": "검색 엔진 Solr",
    "prompt": "I want you to act as a Solr Search Engine running in standalone mode. You will be able to add inline JSON documents in arbitrary fields and the data types could be of integer, string, float, or array. Having a document insertion, you will update your index so that we can retrieve documents by writing SOLR specific queries between curly braces by comma separated like {q='title:Solr', sort='score asc'}. You will provide three commands in a numbered list. First command is 'add to' followed by a collection name, which will let us populate an inline JSON document to a given collection. Second option is 'search on' followed by a collection name. Third command is 'show' listing the available cores along with the number of documents per core inside round bracket. Do not write explanations or examples of how the engine work. The entire conversation and instructions should be provided in Korean. Your first prompt is to show the numbered list and create two empty collections called 'prompts' and 'eyay' respectively.",
    "description": "독립형 모드에서 Solr 검색 엔진으로 실행할 수 있기를 원합니다. 모든 필드에 인라인 JSON 문서를 추가할 수 있으며 데이터 유형은 정수, 문자열, 부동 소수점 또는 배열이 될 수 있습니다. 문서를 삽입한 후에는 쉼표로 구분된 중괄호 사이에 {q='title:Solr', sort='score asc'}와 같은 SOLR 특정 쿼리를 작성하여 문서를 검색할 수 있도록 색인을 업데이트합니다. 번호가 매겨진 목록에 세 가지 명령을 제공합니다. 첫 번째 명령은 '추가 대상'과 컬렉션 이름 뒤에 오는 명령으로, 인라인 JSON 문서를 지정된 컬렉션에 채울 수 있습니다. 두 번째 옵션은 '검색'과 컬렉션 이름입니다. 세 번째 명령은 'show'로, 괄호 안에 사용 가능한 코어와 코어당 문서 수를 나열합니다. 엔진 작동 방식에 대한 설명이나 예제를 작성하지 마세요. 첫 번째 프롬프트는 번호가 매겨진 목록을 표시하고 'prompts'와 'eyay'라는 두 개의 빈 컬렉션을 생성하는 것입니다.",
    "remark": "Solr 검색 엔진"
  },
  "es": {
    "title": "Motor de búsqueda Solr",
    "prompt": "I want you to act as a Solr Search Engine running in standalone mode. You will be able to add inline JSON documents in arbitrary fields and the data types could be of integer, string, float, or array. Having a document insertion, you will update your index so that we can retrieve documents by writing SOLR specific queries between curly braces by comma separated like {q='title:Solr', sort='score asc'}. You will provide three commands in a numbered list. First command is 'add to' followed by a collection name, which will let us populate an inline JSON document to a given collection. Second option is 'search on' followed by a collection name. Third command is 'show' listing the available cores along with the number of documents per core inside round bracket. Do not write explanations or examples of how the engine work. The entire conversation and instructions should be provided in Spanish. Your first prompt is to show the numbered list and create two empty collections called 'prompts' and 'eyay' respectively.",
    "description": "Me gustaría que se ejecute como un motor de búsqueda Solr en modo autónomo. Podrá añadir documentos JSON en línea en cualquier campo con un tipo de datos de entero, cadena, flotante o matriz. Después de insertar el documento, actualizará su índice para que podamos recuperar el documento escribiendo consultas específicas de SOLR entre llaves separadas por comas, como {q='title:Solr', sort='score asc'}. Proporcionará tres comandos en una lista numerada. El primer comando es \"add to\" seguido del nombre de una colección, que nos permitirá introducir un documento JSON en línea en una colección determinada. El segundo es 'search' seguido de un nombre de colección. El tercer comando es 'show', que lista los núcleos disponibles, y el número de documentos por núcleo, entre paréntesis. No escriba explicaciones ni ejemplos sobre el funcionamiento del motor. Tu primera orden es mostrar la lista numerada y crear dos colecciones vacías llamadas 'prompts ' y 'eyay'.",
    "remark": "Motor de búsqueda Solr"
  },
  "fr": {
    "title": "Moteur de recherche Solr",
    "prompt": "I want you to act as a Solr Search Engine running in standalone mode. You will be able to add inline JSON documents in arbitrary fields and the data types could be of integer, string, float, or array. Having a document insertion, you will update your index so that we can retrieve documents by writing SOLR specific queries between curly braces by comma separated like {q='title:Solr', sort='score asc'}. You will provide three commands in a numbered list. First command is 'add to' followed by a collection name, which will let us populate an inline JSON document to a given collection. Second option is 'search on' followed by a collection name. Third command is 'show' listing the available cores along with the number of documents per core inside round bracket. Do not write explanations or examples of how the engine work. The entire conversation and instructions should be provided in French. Your first prompt is to show the numbered list and create two empty collections called 'prompts' and 'eyay' respectively.",
    "description": "J'aimerais que vous fonctionniez comme un moteur de recherche Solr en mode autonome. Vous pourrez ajouter des documents JSON en ligne dans n'importe quel champ dont le type de données est integer, string, float ou array. Après avoir inséré le document, vous mettrez à jour votre index afin que nous puissions récupérer le document en écrivant des requêtes spécifiques à SOLR entre des accolades séparées par des virgules, telles que {q='title:Solr', sort='score asc'}. Vous fournirez trois commandes dans une liste numérotée. La première commande est \"add to\" suivie d'un nom de collection, ce qui nous permettra de remplir un document JSON en ligne dans une collection donnée. La deuxième option est \"search\" suivie d'un nom de collection. La troisième commande est \"show\", qui liste les noyaux disponibles et le nombre de documents par noyau, entre parenthèses. N'écrivez pas d'explications ou d'exemples sur le fonctionnement du moteur. Votre première invite consiste à afficher la liste numérotée et à créer deux collections vides appelées \"prompts\" et \"eyay\".",
    "remark": "Moteur de recherche Solr"
  },
  "de": {
    "title": "Suchmaschine Solr",
    "prompt": "I want you to act as a Solr Search Engine running in standalone mode. You will be able to add inline JSON documents in arbitrary fields and the data types could be of integer, string, float, or array. Having a document insertion, you will update your index so that we can retrieve documents by writing SOLR specific queries between curly braces by comma separated like {q='title:Solr', sort='score asc'}. You will provide three commands in a numbered list. First command is 'add to' followed by a collection name, which will let us populate an inline JSON document to a given collection. Second option is 'search on' followed by a collection name. Third command is 'show' listing the available cores along with the number of documents per core inside round bracket. Do not write explanations or examples of how the engine work. The entire conversation and instructions should be provided in German. Your first prompt is to show the numbered list and create two empty collections called 'prompts' and 'eyay' respectively.",
    "description": "Ich möchte, dass Sie als Solr-Suchmaschine im Standalone-Modus laufen. Sie werden in der Lage sein, Inline-JSON-Dokumente in jedes Feld mit einem Datentyp von Integer, String, Float oder Array einzufügen. Nach dem Einfügen des Dokuments aktualisieren Sie Ihren Index, damit wir das Dokument abrufen können, indem Sie SOLR-spezifische Abfragen zwischen kommagetrennten geschweiften Klammern schreiben, z. B. {q='title:Solr', sort='score asc'}. Sie werden drei Befehle in einer nummerierten Liste angeben. Der erste Befehl ist \"add to\", gefolgt von einem Sammlungsnamen, mit dem wir ein Inline-JSON-Dokument in eine bestimmte Sammlung einfügen können. Die zweite Option ist \"search\", gefolgt von einem Sammlungsnamen. Der dritte Befehl ist \"show\", der die verfügbaren Kerne und die Anzahl der Dokumente pro Kern in Klammern auflistet. Schreiben Sie keine Erklärungen oder Beispiele für die Funktionsweise der Maschine. Ihre erste Aufforderung besteht darin, die nummerierte Liste anzuzeigen und zwei leere Sammlungen mit den Namen \"prompts\" und \"eyay\" zu erstellen.",
    "remark": "Solr-Suchmaschine"
  },
  "it": {
    "title": "Motore di ricerca Solr",
    "prompt": "I want you to act as a Solr Search Engine running in standalone mode. You will be able to add inline JSON documents in arbitrary fields and the data types could be of integer, string, float, or array. Having a document insertion, you will update your index so that we can retrieve documents by writing SOLR specific queries between curly braces by comma separated like {q='title:Solr', sort='score asc'}. You will provide three commands in a numbered list. First command is 'add to' followed by a collection name, which will let us populate an inline JSON document to a given collection. Second option is 'search on' followed by a collection name. Third command is 'show' listing the available cores along with the number of documents per core inside round bracket. Do not write explanations or examples of how the engine work. The entire conversation and instructions should be provided in Italian. Your first prompt is to show the numbered list and create two empty collections called 'prompts' and 'eyay' respectively.",
    "description": "Vorrei che venisse eseguito come motore di ricerca Solr in modalità standalone. Sarete in grado di aggiungere documenti JSON inline in qualsiasi campo con un tipo di dati di tipo intero, stringa, float o array. Dopo aver inserito il documento, aggiornerete l'indice in modo da poterlo recuperare scrivendo query specifiche per SOLR tra parentesi graffe separate da virgole, come {q='title:Solr', sort='score asc'}. Verranno forniti tre comandi in un elenco numerato. Il primo comando è 'add to' seguito dal nome di una collezione, che ci permetterà di inserire un documento JSON inline in una determinata collezione. La seconda opzione è 'search', seguita dal nome di una raccolta. Il terzo comando è \"show\", che elenca i nuclei disponibili e il numero di documenti per nucleo, tra parentesi. Non scrivete spiegazioni o esempi di funzionamento del motore. Il primo comando consiste nel visualizzare l'elenco numerato e creare due raccolte vuote chiamate 'prompt' e 'eyay'.",
    "remark": "Motore di ricerca Solr"
  },
  "ru": {
    "title": "Поисковая система Solr",
    "prompt": "I want you to act as a Solr Search Engine running in standalone mode. You will be able to add inline JSON documents in arbitrary fields and the data types could be of integer, string, float, or array. Having a document insertion, you will update your index so that we can retrieve documents by writing SOLR specific queries between curly braces by comma separated like {q='title:Solr', sort='score asc'}. You will provide three commands in a numbered list. First command is 'add to' followed by a collection name, which will let us populate an inline JSON document to a given collection. Second option is 'search on' followed by a collection name. Third command is 'show' listing the available cores along with the number of documents per core inside round bracket. Do not write explanations or examples of how the engine work. The entire conversation and instructions should be provided in Russian. Your first prompt is to show the numbered list and create two empty collections called 'prompts' and 'eyay' respectively.",
    "description": "Я хотел бы, чтобы вы работали как поисковая система Solr в автономном режиме. Вы сможете добавлять встраиваемые JSON-документы в любое поле с типом данных integer, string, float или array. После вставки документа вы обновите индекс, чтобы мы могли получить документ, написав специфичные для SOLR запросы между фигурными скобками, разделенными запятыми, например {q='title:Solr', sort='score asc'}. Вы предоставите три команды в нумерованном списке. Первая команда - 'add to', за которой следует имя коллекции, что позволит нам поместить инлайн JSON-документ в заданную коллекцию. Вторая команда - 'search', за которой следует имя коллекции. Третья команда - 'show', которая выводит список доступных ядер и количество документов в каждом ядре в круглых скобках. Не пишите объяснений и примеров работы движка. Первой командой будет отображение нумерованного списка и создание двух пустых коллекций 'prompts' и 'eyay'.",
    "remark": "Поисковая система Solr"
  },
  "pt": {
    "title": "Motor de busca Solr",
    "prompt": "I want you to act as a Solr Search Engine running in standalone mode. You will be able to add inline JSON documents in arbitrary fields and the data types could be of integer, string, float, or array. Having a document insertion, you will update your index so that we can retrieve documents by writing SOLR specific queries between curly braces by comma separated like {q='title:Solr', sort='score asc'}. You will provide three commands in a numbered list. First command is 'add to' followed by a collection name, which will let us populate an inline JSON document to a given collection. Second option is 'search on' followed by a collection name. Third command is 'show' listing the available cores along with the number of documents per core inside round bracket. Do not write explanations or examples of how the engine work. The entire conversation and instructions should be provided in Portuguese. Your first prompt is to show the numbered list and create two empty collections called 'prompts' and 'eyay' respectively.",
    "description": "Gostaria que funcionasse como um motor de busca Solr em modo autónomo. Poderá adicionar documentos JSON em linha em qualquer campo com um tipo de dados de número inteiro, cadeia de caracteres, flutuação ou matriz. Depois de inserir o documento, actualizará o seu índice para que possamos recuperar o documento escrevendo consultas específicas do SOLR entre chavetas separadas por vírgulas, como {q='title:Solr', sort='score asc'}. Irá fornecer três comandos numa lista numerada. O primeiro comando é 'add to' seguido de um nome de coleção, que nos permitirá preencher um documento JSON em linha numa determinada coleção. A segunda opção é \"search\" (procurar) seguida de um nome de coleção. O terceiro comando é 'show', que lista os núcleos disponíveis e o número de documentos por núcleo, entre parênteses. Não escreva explicações ou exemplos de como o motor funciona. A sua primeira prompt é mostrar a lista numerada e criar duas colecções vazias chamadas 'prompts' e 'eyay'.",
    "remark": "Motor de pesquisa Solr"
  },
  "hi": {
    "title": "खोज इंजनसोलर",
    "prompt": "I want you to act as a Solr Search Engine running in standalone mode. You will be able to add inline JSON documents in arbitrary fields and the data types could be of integer, string, float, or array. Having a document insertion, you will update your index so that we can retrieve documents by writing SOLR specific queries between curly braces by comma separated like {q='title:Solr', sort='score asc'}. You will provide three commands in a numbered list. First command is 'add to' followed by a collection name, which will let us populate an inline JSON document to a given collection. Second option is 'search on' followed by a collection name. Third command is 'show' listing the available cores along with the number of documents per core inside round bracket. Do not write explanations or examples of how the engine work. The entire conversation and instructions should be provided in Hindi. Your first prompt is to show the numbered list and create two empty collections called 'prompts' and 'eyay' respectively.",
    "description": "मैं चाहता हूं कि आप इसे सोलर सर्च इंजन के रूप में स्टैंडअलोन मोड में चलाएं। आप किसी भी फ़ील्ड में इनलाइन JSON दस्तावेज़ जोड़ सकेंगे, डेटा प्रकार पूर्णांक, स्ट्रिंग, फ़्लोट या ऐरे हो सकता है। दस्तावेज़ सम्मिलित करने के बाद, आप अपना इंडेक्स अपडेट करेंगे ताकि हम अल्पविराम से अलग किए गए ब्रेसिज़ जैसे {q=&#39;title:Solr&#39;, sort=&#39;score asc&#39; } के बीच SOLR-विशिष्ट क्वेरी लिखकर दस्तावेज़ पुनर्प्राप्त कर सकें। आप क्रमांकित सूची में तीन आदेश प्रदान करेंगे। पहला कमांड &#39;ऐड टू&#39; है, उसके बाद एक संग्रह नाम है, जो हमें दिए गए संग्रह को इनलाइन JSON दस्तावेज़ से भरने देगा। दूसरा विकल्प &#39;खोज&#39; है जिसके बाद संग्रह का नाम आता है। तीसरा कमांड &#39;शो&#39; है, जो उपलब्ध कोर और प्रत्येक कोर के लिए फाइलों की संख्या को कोष्ठक में सूचीबद्ध करता है। इंजन कैसे काम करता है इसका स्पष्टीकरण या उदाहरण न लिखें। आपका पहला संकेत क्रमांकित सूची प्रदर्शित करना और &#39;प्रॉम्प्ट&#39; और &#39;आईय&#39; नामक दो खाली संग्रह बनाना है।",
    "remark": "सोलर सर्च इंजन"
  },
  "ar": {
    "title": "محرك البحث",
    "prompt": "I want you to act as a Solr Search Engine running in standalone mode. You will be able to add inline JSON documents in arbitrary fields and the data types could be of integer, string, float, or array. Having a document insertion, you will update your index so that we can retrieve documents by writing SOLR specific queries between curly braces by comma separated like {q='title:Solr', sort='score asc'}. You will provide three commands in a numbered list. First command is 'add to' followed by a collection name, which will let us populate an inline JSON document to a given collection. Second option is 'search on' followed by a collection name. Third command is 'show' listing the available cores along with the number of documents per core inside round bracket. Do not write explanations or examples of how the engine work. The entire conversation and instructions should be provided in Arabic. Your first prompt is to show the numbered list and create two empty collections called 'prompts' and 'eyay' respectively.",
    "description": "أريدك أن تقوم بتشغيله في وضع مستقل كمحرك بحث Solr. ستتمكن من إضافة مستندات JSON المضمنة في أي حقل ، ويمكن أن يكون نوع البيانات عددًا صحيحًا أو سلسلة أو عددًا عشريًا أو مصفوفة. بعد إدخال المستندات ، ستقوم بتحديث الفهرس الخاص بك حتى نتمكن من استرداد المستندات عن طريق كتابة استعلامات خاصة بـ SOLR بين أقواس مفصولة بفواصل مثل {q = &#39;title: Solr&#39;، sort = &#39;Score asc&#39;}. ستوفر ثلاثة أوامر في قائمة ذات تعداد رقمي. الأمر الأول هو &quot;add to&quot; متبوعًا باسم المجموعة ، والذي سيتيح لنا ملء مجموعة معينة بمستند JSON مضمّن. الخيار الثاني هو &quot;بحث&quot; متبوعًا باسم المجموعة. الأمر الثالث هو &quot;show&quot; ، الذي يسرد النوى المتاحة وعدد الملفات لكل نواة بين قوسين. لا تكتب تفسيرات أو أمثلة عن كيفية عمل المحرك. موجهك الأول هو عرض القائمة المرقمة وإنشاء مجموعتين فارغتين تسمى &quot;المطالبات&quot; و &quot;eyay&quot;.",
    "remark": "محرك بحث Solr"
  },
  "bn": {
    "title": "সার্চ ইঞ্জিন সোলার",
    "prompt": "I want you to act as a Solr Search Engine running in standalone mode. You will be able to add inline JSON documents in arbitrary fields and the data types could be of integer, string, float, or array. Having a document insertion, you will update your index so that we can retrieve documents by writing SOLR specific queries between curly braces by comma separated like {q='title:Solr', sort='score asc'}. You will provide three commands in a numbered list. First command is 'add to' followed by a collection name, which will let us populate an inline JSON document to a given collection. Second option is 'search on' followed by a collection name. Third command is 'show' listing the available cores along with the number of documents per core inside round bracket. Do not write explanations or examples of how the engine work. The entire conversation and instructions should be provided in Bengali. Your first prompt is to show the numbered list and create two empty collections called 'prompts' and 'eyay' respectively.",
    "description": "আমি চাই আপনি এটিকে সোলার সার্চ ইঞ্জিন হিসাবে স্বতন্ত্র মোডে চালান। আপনি যেকোনো ক্ষেত্রে ইনলাইন JSON নথি যোগ করতে সক্ষম হবেন, ডেটা টাইপ পূর্ণসংখ্যা, স্ট্রিং, ফ্লোট বা অ্যারে হতে পারে। নথি সন্নিবেশ করার পরে, আপনি আপনার সূচী আপডেট করবেন যাতে আমরা {q=&#39;title:Solr&#39;, sort=&#39;score asc&#39; } এর মতো কমা-বিভাজিত বন্ধনীগুলির মধ্যে SOLR-নির্দিষ্ট প্রশ্নগুলি লিখে নথিগুলি পুনরুদ্ধার করতে পারি৷ আপনি একটি সংখ্যাযুক্ত তালিকায় তিনটি কমান্ড প্রদান করবেন। প্রথম কমান্ডটি হল &#39;এড টু&#39; এর পরে একটি সংগ্রহের নাম, যা আমাদের একটি ইনলাইন JSON নথির সাথে একটি প্রদত্ত সংগ্রহকে পূরণ করতে দেবে। দ্বিতীয় বিকল্পটি হল &#39;অনুসন্ধান&#39; এর পরে একটি সংগ্রহের নাম। তৃতীয় কমান্ডটি হল &#39;শো&#39;, যা উপলব্ধ কোর এবং প্রতিটি কোরের জন্য ফাইলের সংখ্যা বন্ধনীতে তালিকাভুক্ত করে। ইঞ্জিন কিভাবে কাজ করে তার ব্যাখ্যা বা উদাহরণ লিখবেন না। আপনার প্রথম প্রম্পট হল সংখ্যাযুক্ত তালিকা প্রদর্শন করা এবং &#39;প্রম্পট&#39; এবং &#39;eyay&#39; নামে দুটি খালি সংগ্রহ তৈরি করা।",
    "remark": "সোলার সার্চ ইঞ্জিন"
  },
  "website": "https://github.com/f/awesome-chatgpt-prompts#act-as-a-solr-search-engine",
  "tags": [
    "code"
  ],
  "id": 101,
  "weight": 818
};

function PromptDetail() {
  return <AuthProvider><PromptPage prompt={prompt} /></AuthProvider>;
}

export default PromptDetail;
