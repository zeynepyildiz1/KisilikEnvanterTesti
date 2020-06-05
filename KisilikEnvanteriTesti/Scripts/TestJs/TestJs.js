/// <reference path="progressbar.js" />
(function () {
    var questions = [{
        question: "Kendinizi başka kişilere tanıtmayı zor buluyorsunuz.",
        choices: [" Her zaman", " Çoğunlukla", " Kararsızım", " Nadiren", " Hiçbir zaman"],

    }, {
        question: "İlgi merkezi olmaktan çekiniyorsunuz.",
        choices: [" Her zaman", " Çoğunlukla", " Kararsızım", " Nadiren", " Hiçbir zaman"],

    }, {
        question: "Eğer birisi e-postanıza hızlı şekilde yanıt vermezse, söylediğiniz bir şeyin yanlış olup olmadığı hakkında endişelenmeye başlıyorsunuz.",
        choices: [" Her zaman", " Çoğunlukla", " Kararsızım", " Nadiren", " Hiçbir zaman"],

    }, {
        question: "Genellikle konuşmaları başlatan taraf siz değilsiniz.",
        choices: [" Her zaman", " Çoğunlukla", " Kararsızım", " Nadiren", " Hiçbir zaman"],

    }, {
        question: "Nadiren sırf meraktan bir şey yapıyorsunuz.",
        choices: [" Her zaman", " Çoğunlukla", " Kararsızım", " Nadiren", " Hiçbir zaman"],

    }, {
        question: "Çoğunlukla düşüncelerinizde öyle kayboluyorsunuz ki, etrafınızdakileri görmezden geliyor veya unutuyorsunuz.",
        choices: [" Her zaman", " Çoğunlukla", " Kararsızım", " Nadiren", " Hiçbir zaman"],

    }, {
        question: "Sizin için düzenli olmak uyum sağlamaktan daha önemli.",
        choices: [" Her zaman", " Çoğunlukla", " Kararsızım", " Nadiren", " Hiçbir zaman"],

    }, {
        question: "Yaratıcı olmaktan çok pratik olduğunuzu düşünüyorsunuz.",
        choices: [" Her zaman", " Çoğunlukla", " Kararsızım", " Nadiren", " Hiçbir zaman"],

    }, {
        question: "Eylemlerinizin diğer insanları nasıl etkilediği konusunda nadiren endişe duyuyorsunuz.",
        choices: [" Her zaman", " Çoğunlukla", " Kararsızım", " Nadiren", " Hiçbir zaman"],

    }, {
        question: "Karar verirken tecrübelerinize danışıyorsunuz.",
        choices: [" Her zaman", " Çoğunlukla", " Kararsızım", " Nadiren", " Hiçbir zaman"],

    }, {
        question: "Duygularınız, onları kontrol ettiğinizden daha çok sizi kontrol ediyor.",
        choices: [" Her zaman", " Çoğunlukla", " Kararsızım", " Nadiren", " Hiçbir zaman"],

    }, {
        question: "Çalışma tarzınız yöntemsel ve organize bir yaklaşımdan çok, rastgele enerji patlamalarına daha yakın.",
        choices: [" Her zaman", " Çoğunlukla", " Kararsızım", " Nadiren", " Hiçbir zaman"],

    }, {
        question: "Bir tartışma esnasında, gerçek, insanların hassasiyetlerinden daha önemlidir.",
        choices: [" Her zaman", " Çoğunlukla", " Kararsızım", " Nadiren", " Hiçbir zaman"],

    }, {
        question: "Bulunduğunuz ruh  halinden çıkmanız uzun zaman alıyor.",
        choices: [" Her zaman", " Çoğunlukla", " Kararsızım", " Nadiren", " Hiçbir zaman"],

    }, {
        question: "Bir tartışmayı kazanmak, kimsenin üzülmemesini sağlamaktan daha önemli.",
        choices: [" Her zaman", " Çoğunlukla", " Kararsızım", " Nadiren", " Hiçbir zaman"],
    }, {
        question: "Her projenin en önemli kısmı, bir plan geliştirmek ve buna bağlı kalabilmektir.",
        choices: [" Her zaman", " Çoğunlukla", " Kararsızım", " Nadiren", " Hiçbir zaman"],

    }, {
        question: "Başkalarının eylemlerinizi etkilemesine izin vermiyorsunuz.",
        choices: [" Her zaman", " Çoğunlukla", " Kararsızım", " Nadiren", " Hiçbir zaman"],

    }, {
        question: "Doğaçlama yaşamak yerine detaylı bir plan oluşturmayı tercih ediyorsunuz.",
        choices: [" Her zaman", " Çoğunlukla", " Kararsızım", " Nadiren", " Hiçbir zaman"],
    }, {
        question: "Zamansız gelen bir kutlama işten çıkınca eve gitme planınızdan daha iyi değil.",
        choices: [" Her zaman", " Çoğunlukla", " Kararsızım", " Nadiren", " Hiçbir zaman"],

    }, {
        question: "Nispeten ketum ve sessiz birisiniz.",
        choices: [" Her zaman", " Çoğunlukla", " Kararsızım", " Nadiren", " Hiçbir zaman"],

    }];
    function addJavascript(jsname) {
        var th = document.getElementsByTagName('head')[0];
        var s = document.createElement('script');
        s.setAttribute('type', 'text/javascript');
        s.setAttribute('src', jsname);
        th.appendChild(s);
    }

    addJavascript('~/Scripts/TestJs/ProgressBar.js');
    var questionCounter = 0; //Tracks question number 
    var selections = []; //Array containing user choices 
    var quiz = $('#quiz'); //Quiz div object 
    var sonuc = "";
    var i = 0;
    var j = 1;
    var k = 0;
    var saniye = 00, dakika = 00, saat = 00, sure,tempsure;
    $('#sonuckayit').hide(); $('#next').hide(); $('#box').hide(); $('#myProgress').hide();
    // Display initial question
    function say() {
        if (saniye < 59) { saniye++; }
        else {
            saniye = 00;
            if (dakika < 59) { dakika++; }
            else { dakika = 00; saat++; }
        }
        sure = saat + " : " + dakika + " : " + saniye;
        $('#sure').html(sure);
    }

    var numCorrect = 0;
    $('#baslat').on('click', function (e) {
        e.preventDefault();
        if (quiz.is(':animated')) {
            return false;
        }

        $(document).ready(function () {
            $('#sure').html(" 0 : 0 : 0 ");
            setInterval(say, 1000);
        });

        displayNext();
        $('#baslat').hide();
        $('#next').show();
        $('#img').remove();
        $('#box').show(); $('#myProgress').show();

    });

    $('#next').on('click', function (e) {
        e.preventDefault();

        // Suspend click listener during fade animation 
        if (quiz.is(':animated')) {
            return false;
        }
        choose();

        // If no user selection, progress is stopped 
        if (isNaN(selections[questionCounter]) || isNaN(selections[questionCounter + 1]) || isNaN(selections[questionCounter + 2]) || isNaN(selections[questionCounter + 3]) || isNaN(selections[questionCounter + 4])) {

            alert('Lütfen bir seçeneği seçiniz!');
        } else {
            questionCounter = questionCounter + 5;
            if (questionCounter == 15) { $('#next').text("Bitir"); }
            if (questionCounter == 20) { tempsure = sure; $('#box').hide(); saniye = 0; dakika = 0; saat = 0; $('#myProgress').hide();}
            sonuchesapla(questionCounter);
            k = i;
            i = i + 5;
            j++; ilerle();
            displayNext();
        }

    });// Click handler for the 'next' button 

    $('#sonuckayit').on('click', function (e) {
        e.preventDefault();
        if (quiz.is(':animated')) {
            return false;
        }
        var kullanici = {
            Sonuc: sonuchesapla(),
            Sure: tempsure
        }
        $.ajax({
            url: '/KisilikEnvanteriTesti/SonucKaydet',
            type: 'POST',
            dataType: 'json',
            data: kullanici,
            success: function (data) {
                alert(data);
            }
        });
        $('#sonuckayit').hide();
    });
    $('#prev').on('click', function (e) {
        e.preventDefault();

        if (quiz.is(':animated')) {
            return false;
        }
        choose();
        questionCounter = questionCounter - 5;
        k = k - 5;
        i = i - 5;
        j--;
        $('#next').text("İleri");
        sonuc = sonuc.slice(0, -1);
        gerile();
        displayNext();
    });
    // Click handler for the 'Start Over' button 
    $('#start').on('click', function (e) {
        e.preventDefault();
        sonuc = "";
        if (quiz.is(':animated')) {
            return false;
        }
        i = 0;
        j = 1;
        k = 0;
        questionCounter = 0;
        selections = [];
        $('#sonuc').remove();
        displayNext();
        $('#start').hide();
        saniye = 0; dakika = 0; saat = 0;
        $('#box').show(); baslat(); $('#myProgress').show();
      
    });

    // Animates buttons on hover 
    $('.button').on('mouseenter', function () {
        $(this).addClass('active');
    });
    $('.button').on('mouseleave', function () {
        $(this).removeClass('active');
    });

    // Creates and returns the div that contains the questions and 
    // the answer selections 
    function createQuestionElement(index) {

        var qElement = $('<div>', {
            id: 'question',
            class: 'question'
        });

        var header = $('<h2>Soru ' + (index + 1) + ':</h2>');
        qElement.append(header);

        var question = $('<p>').append(questions[index].question);
        qElement.append(question);

        var radioButtons = createRadios(index);
        qElement.append(radioButtons);

        return qElement;
    }
    function createRadios(index) {
        var radioList = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < questions[index].choices.length; i++) {
            item = $('<li>');
            input = '<input type="radio" name="answer" value=' + i + ' />';
            input += questions[index].choices[i];
            item.append(input);
            radioList.append(item);
        }
        return radioList;
    }
    function createQuestionElement2(index) {

        var qElement = $('<div>', {
            id: 'question2',
            class: 'question'
        });

        var header = $('<h2>Soru ' + (index + 1) + ':</h2>');
        qElement.append(header);

        var question = $('<p>').append(questions[index].question);
        qElement.append(question);

        var radioButtons = createRadios2(index);
        qElement.append(radioButtons);

        return qElement;
    }
    function createRadios2(index) {
        var radioList = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < questions[index].choices.length; i++) {
            item = $('<li>');
            input = '<input type="radio" name="answer2" value=' + i + ' />';
            input += questions[index].choices[i];
            item.append(input);
            radioList.append(item);
        }
        return radioList;
    }
    function createQuestionElement3(index) {

        var qElement = $('<div>', {
            id: 'question3',
            class: 'question'
        });

        var header = $('<h2>Soru ' + (index + 1) + ':</h2>');
        qElement.append(header);

        var question = $('<p>').append(questions[index].question);
        qElement.append(question);

        var radioButtons = createRadios3(index);
        qElement.append(radioButtons);

        return qElement;
    }
    function createRadios3(index) {
        var radioList = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < questions[index].choices.length; i++) {
            item = $('<li>');
            input = '<input type="radio" name="answer3" value=' + i + ' />';
            input += questions[index].choices[i];
            item.append(input);
            radioList.append(item);
        }
        return radioList;
    }
    function createQuestionElement4(index) {

        var qElement = $('<div>', {
            id: 'question4',
            class: 'question'
        });

        var header = $('<h2>Soru ' + (index + 1) + ':</h2>');
        qElement.append(header);

        var question = $('<p>').append(questions[index].question);
        qElement.append(question);

        var radioButtons = createRadios4(index);
        qElement.append(radioButtons);

        return qElement;
    }
    function createRadios4(index) {
        var radioList = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < questions[index].choices.length; i++) {
            item = $('<li>');
            input = '<input type="radio" name="answer4" value=' + i + ' />';
            input += questions[index].choices[i];
            item.append(input);
            radioList.append(item);
        }
        return radioList;
    }
    function createQuestionElement5(index) {

        var qElement = $('<div>', {
            id: 'question5',
            class: 'question'
        });

        var header = $('<h2>Soru ' + (index + 1) + ':</h2>');
        qElement.append(header);

        var question = $('<p>').append(questions[index].question);
        qElement.append(question);

        var radioButtons = createRadios5(index);
        qElement.append(radioButtons);

        return qElement;
    }
    function createRadios5(index) {
        var radioList = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < questions[index].choices.length; i++) {
            item = $('<li>');
            input = '<input type="radio" name="answer5" value=' + i + ' />';
            input += questions[index].choices[i];
            item.append(input);
            radioList.append(item);
        }
        return radioList;
    }
    // Reads the user selection and pushes the value to an array 
    function choose() {
        selections[questionCounter] = +$('input[name="answer"]:checked').val();
        selections[questionCounter + 1] = +$('input[name="answer2"]:checked').val();
        selections[questionCounter + 2] = +$('input[name="answer3"]:checked').val();
        selections[questionCounter + 3] = +$('input[name="answer4"]:checked').val();
        selections[questionCounter + 4] = +$('input[name="answer5"]:checked').val();
    }// Seçilen şıkkı tutuyor.

    // Displays next requested element 
    function displayNext() {
        quiz.fadeOut(function () {
            $('#question').remove();
            $('#question2').remove();
            $('#question3').remove();
            $('#question4').remove();
            $('#question5').remove();

            if (questionCounter < questions.length) {
                var nextQuestion = createQuestionElement(questionCounter);
                var nextQuestion2 = createQuestionElement2(questionCounter + 1);
                var nextQuestion3 = createQuestionElement3(questionCounter + 2);
                var nextQuestion4 = createQuestionElement4(questionCounter + 3);
                var nextQuestion5 = createQuestionElement5(questionCounter + 4);
                quiz.append(nextQuestion, nextQuestion2, nextQuestion3, nextQuestion4, nextQuestion5).fadeIn();
                    $('input[name=answer][value=' + selections[questionCounter] + ']').prop('checked', true);//cevabı işaretliyo
                    $('input[name=answer2][value=' + selections[questionCounter + 1] + ']').prop('checked', true);
                    $('input[name=answer3][value=' + selections[questionCounter + 2] + ']').prop('checked', true);
                    $('input[name=answer4][value=' + selections[questionCounter + 3] + ']').prop('checked', true);
                    $('input[name=answer5][value=' + selections[questionCounter + 4] + ']').prop('checked', true);
               
                // Controls display of 'prev' button 
                if (questionCounter === 5) {
                    $('#prev').show();
                } else if (questionCounter === 0) {

                    $('#prev').hide();
                    $('#sonuckayit').hide();
                    $('#next').show();
                }
            } else {
                var scoreElem = displayScore();
                quiz.append(scoreElem).fadeIn();
                $('#next').hide();
                $('#prev').hide();
                $('#start').show();
                $('#sonuckayit').show();
            }
        });
    }//Soru ekliyor, cevap kaydediyor, ileri geri görünümlerini yönetiyor. 
    // Computes score and returns a paragraph element to be displayed 
    function sonuchesapla(index) {
        numCorrect = 0;
        console.log("i:" + i + " j:" + j + " k:" + k)
        for (i = k; i < j * 5; i++) {

            if (selections[i] === 0) {

                numCorrect = numCorrect + 2; console.log("i1:" + numCorrect); console.log("s1:" + selections[i]);

            }
            if (selections[i] === 1) {

                numCorrect = numCorrect + 1; console.log("i2:" + numCorrect); console.log("s1:" + selections[i]);

            } if (selections[i] === 2) {

                numCorrect = numCorrect + 0; console.log("i3:" + numCorrect); console.log("s1:" + selections[i]);

            } if (selections[i] === 3) {

                numCorrect = numCorrect - 1; console.log("i4:" + numCorrect); console.log("s1:" + selections[i]);

            } if (selections[i] === 4) {

                numCorrect = numCorrect - 2; console.log("i5:" + numCorrect); console.log("s1:" + selections[i]);
            }
        }
        if (index == 5) {
            console.log(numCorrect);
            if (numCorrect > 0) sonuc = sonuc + "I";
            if (numCorrect <= 0) sonuc = sonuc + "E";

            console.log(sonuc);
        }
        if (index == 10) {
            console.log(numCorrect);
            if (numCorrect > 0) sonuc = sonuc + "N";
            if (numCorrect <= 0) sonuc = sonuc + "S";
            console.log(sonuc);
        }
        if (index == 15) {
            console.log(numCorrect);
            if (numCorrect > 0) sonuc = sonuc + "T";
            if (numCorrect <= 0) sonuc = sonuc + "F";
            console.log(sonuc);
        }
        if (index == 20) {
            console.log(numCorrect);
            if (numCorrect > 0) sonuc = sonuc + "P";
            if (numCorrect <= 0) sonuc = sonuc + "J";
            console.log(sonuc);
        }
        return sonuc;
    }

    function displayScore() {
        var score = $('<div>', { id: 'sonuc' });
        if (sonuc == 'INTJ' || sonuc == 'INTP' || sonuc == 'ENTJ' || sonuc == 'ENTP') {

            if (sonuc == 'INTJ') {
                score.append('<strong style="font-size:22px">Testi başarıyla tamamladınız.Kişilik envanter testinizin sonucu: ' + sonuc + "</strong></br>");
                score.append('<strong  style="font-size:20px">Analizciler Grubu:</strong></br>')
                score.append('Toplumun % 2’sini oluşturan INTJ’lerin % 1’i erkek % 1’i ise kadınlardır. Lider ruhlu olan bu kişiler, hem hayalperest hem de kararlılardır. Araştırmayı sever, bilgiye aç olarak nitelendirilir, sınırlardan hoşlanmazlar. Aynı anda hem bir maceraperest bir idealist hem de paranoyaya varabilecek kadar kuşkucu olabilirler. Görünürdekinin ardında ne olduğunu merak eder, çoğu zamanlarını düşünerek geçirirler.');

                score.append('</br><strong>Ünlü INTJ’Ler:</strong></br> Hillary Clinton, Bill Gates, Lewis Carroll, Sir Isaac Newton…');
            }
            if (sonuc == 'INTP') {
                score.append('<strong style="font-size:22px">Testi başarıyla tamamladınız.Kişilik envanter testinizin sonucu: ' + sonuc + "</strong></br>");
                score.append('<strong  style="font-size:20px">Analizciler Grubu:</strong>')
                score.append('Yaratıcılıkları ile dikkat çeken INTP’ler genellikle düşünür, mimar, bilim insanı gibi kişiler olurlar. Parlak fikirleri ve yaratıcı zekaları ile tanınan INTP’ler sürekli düşünür, mantıkla hayal dünyasını birleştirerek hiç duyulmamış teoriler üretirler. Zaten tarihteki pek çok bilimsel keşfin arkasında da INTP’ler bulunmaktadır.');
                score.append('</br><strong>Ünlü INTP’Ler:</strong></br> Albert Einstein, Thomas Jefferson, Charles Darwin, Abraham Lincoln, Socrates, Marie Curie……');
            }
            if (sonuc == 'ENTJ') {
                score.append('<strong style="font-size:22px">Testi başarıyla tamamladınız.Kişilik envanter testinizin sonucu: ' + sonuc + "</strong></br>");
                score.append('<strong  style="font-size:20px">Analizciler Grubu:</strong>')
                score.append('Doğuştan lider olan ENTJ’ler parlak girişimlerin arkalarında duran isimlerdir. Hem sonuç odaklı hem de içe dönük olan ENTJ’ler amaçlarına ulaşmak için hem disiplinli davranır hem de zekalarını kullanırlar. Her zaman en iyisini yapmak için uğraşır, gücü elde etmeye karşı aşırı istek duyarlar.');
                score.append('</br><strong>Ünlü ENTJ’Ler:</strong></br> Steve Jobs, Harrison Ford, Margaret Thatcher…');
            }
            if (sonuc == 'ENTP') {
                score.append('<strong style="font-size:22px">Testi başarıyla tamamladınız.Kişilik envanter testinizin sonucu: ' + sonuc + "</strong></br>");
                score.append('<strong  style="font-size:20px">Analizciler Grubu:</strong></br>')
                score.append('Tartışma ortamlarından fazlasıyla hoşlanan ENTP’ler, şeytanın avukatları olarak nitelendirilebilecek türden kişilerdir. Orijinal fikirleriyle öne çıkmalarına rağmen düşüncelerini pratiğe geçirme aşamasında pek başarılı olmazlar. Sivri dilleri ve açık sözleri olan ENTP’ler, sahip oldukları özellikleri nedeni ile genellikle arkasından konuşulan, sevilmeyen ve çekilmeyen tiplerdir.');
                score.append('</br><strong>Ünlü ENTP’Ler:</strong></br> Mark Twain, Adam Savage, Sarah Silverman…');
            }
        }
        if (sonuc == 'INFJ' || sonuc == 'INFP' || sonuc == 'ENFJ' || sonuc == 'ENFP') {

            if (sonuc == 'INFJ') {
                score.append('<strong style="font-size:22px">Testi başarıyla tamamladınız.Kişilik envanter testinizin sonucu: ' + sonuc + "</strong></br>");
                score.append('<strong  style="font-size:20px">Diplomat Grubu:</strong></br>')
                score.append('Oldukça nadir rastlanan INFJ’ler, hem idealist hem de yardımsever kişilerdir. Ahlak yönünden bir aziz gibi nitelendirebilirler ve inandıkları şeyler uğruna bütün hayatlarını feda edebilirler. Zorbalardan hoşlanmaz, eşitliği savunur ve kendilerinden daha büyük amaçlar için savaşırlar.');
                score.append('</br><strong>Ünlü INFJ’Ler:</strong></br> Nelson Mandela, Martin Luther King, Mother Teresa…');
            }
            if (sonuc == 'INFP') {
                score.append('<strong style="font-size:22px">Testi başarıyla tamamladınız.Kişilik envanter testinizin sonucu: ' + sonuc + "</strong></br>");
                score.append('<strong  style="font-size:20px">Diplomat Grubu:</strong></br>')
                score.append('İdealist olmaları ile INFJ’lere benzeyen INFP’ler, çok kötü insanlarda bile bir iyilik bulunabileceğine inanırlar. Planlarını; iyilik, güzellik, doğruluk gibi kavramları dikkate alarak yapar ve iyi niyetleri ile dikkat çekerler. İletişim yetenekleri, sezgi güçleri ve anlama kabiliyetleri ile iyi birer sanatçı da diplomat da olabilirler. Baş koydukları yol içerisinde yüksek adanmışlıkları ile kendilerini unutup kaybolabilirler.');
                score.append('</br><strong>Ünlü INFP’Ler:</strong></br> Johnny Depp, Shakespeare, Björk…');
            }
            if (sonuc == 'ENFJ') {
                score.append('<strong style="font-size:22px">Testi başarıyla tamamladınız.Kişilik envanter testinizin sonucu: ' + sonuc + "</strong></br>");
                score.append('<strong  style="font-size:20px">Diplomat Grubu:</strong></br>')
                score.append('Lider ruhlu olan ENFJ’ler, genellikle koç, öğretmen, politikacı, yönetici, mentor gibi meslekle edinirler. İnançları ve iletişim yetenekleri ile topluluk önünde konuşmaktan keyif alır, motive etme konusunda yüksek başarı gösterirler. İnandıkları bir dava ya da kişi için gereğinden fazla fedakarlık yapma eğilimi gösterir, bu nedenle zaman zaman hayal kırıklığına uğrayabilirler.');
                score.append('</br><strong>Ünlü ENFJ’Ler:</strong></br> Barack Obama, Oprah Winfrey…');
            }
            if (sonuc == 'ENFP') {
                score.append('<strong style="font-size:22px">Testi başarıyla tamamladınız.Kişilik envanter testinizin sonucu: ' + sonuc + "</strong></br>");
                score.append('<strong  style="font-size:20px">Diplomat Grubu:</strong></br>')
                score.append('Özgür ruh olarak da tanımlanabilecek ENFP’ler, enerjik, tutkulu ve bağımsız kişilerdir. Dünyayı göründüğü gibi değil daha derinlere inerek incelerler. Belirli kalıplar içerisine sokulmaktan hoşlanmaz, monoton düzen içerisinde mutsuzlaşarak yaratıcılıklarını kaybederler.');
                score.append('</br><strong>Ünlü ENFP’Ler:</strong></br> Walt Disney, Mark Twain, Robert Downey Jr., Will Smith, Drew Barrymore…');
            }
        }
        if (sonuc == 'ISTJ' || sonuc == 'ISFJ' || sonuc == 'ESTJ' || sonuc == 'ESFJ') {
            if (sonuc == 'ISTJ') {
                score.append('<strong style="font-size:22px">Testi başarıyla tamamladınız.Kişilik envanter testinizin sonucu: ' + sonuc + "</strong></br>");
                score.append('<strong  style="font-size:20px">Gözcüler Grubu:</strong></br>')
                score.append('Sıklıkla rastlanan ISTF’ler geleneklere ve kurallara bağlı kalmaktan hoşlanan kişilerdir. Sorumluluk almayı sever, mantıklı hareket eder, analiz yeteneklerinden sık sık faydalanır ve görevlerini mutlak bağlılık ile yerine getirirler.');
                score.append('</br><strong>Ünlü ISTF’Ler:</strong></br> ting, Natalie Portman, Denzel Washington');
            }
            if (sonuc == 'ISFJ') {
                score.append('<strong style="font-size:22px">Testi başarıyla tamamladınız.Kişilik envanter testinizin sonucu: ' + sonuc + "</strong></br>");
                score.append('<strong  style="font-size:20px">Gözcüler Grubu:</strong></br>')
                score.append('İçe dönük olmasına rağmen sosyal ilişkilerinde gayet başarılı olan ISFJ’ler için işini iyi yapmak öncelikli prensipler arasındadır. Hem cömertlikleri hem de hassasiyetleri ile öne çıkar, buna ek olarak odak noktası olmaktan da hoşlanırlar. Saygın olmak ister ve iyiliğe karşılık iyilik ile cevap verirler.');
                score.append('</br><strong>Ünlü ISFJ’Ler:</strong></br> Vin Diesel, Beyonce…');
            }
            if (sonuc == 'ESTJ') {
                score.append('<strong style="font-size:22px">Testi başarıyla tamamladınız.Kişilik envanter testinizin sonucu: ' + sonuc + "</strong></br>");
                score.append('<strong  style="font-size:20px">Gözcüler Grubu:</strong></br>')
                score.append('Gelenek ve düzen yanlısı olan ESTJ’ler, insanları bir araya getirme konusunda başarılı kişilerdir. Tembellik yapmaktan hoşlanmaz, özellikle iş yaşamlarında dürüstlükleri ile öne çıkarlar. Ekip çalışması konusunda başarılıdırlar ve grupta yeteri kadar performans göstermeyen kişilere müdahale etmekten çekinmezler.');
                score.append('</br><strong>Ünlü ESTJ’Ler:</strong></br> Frank Sinatra, Kanye West, Kate Middleton, John D. Rockefeller…');
            }
            if (sonuc == 'ESFJ') {
                score.append('<strong style="font-size:22px">Testi başarıyla tamamladınız.Kişilik envanter testinizin sonucu: ' + sonuc + "</strong></br>");
                score.append('<strong  style="font-size:20px">Gözcüler Grubu:</strong></br>')
                score.append('Ortamın en popülerleri olan ESFJ’ler, organizasyonu yapan, ortaya fikir atan ve genellikle liderlik yapan kişilerdir. Sosyal yönleri epey güçlü olan bu kişiler, havadan sudan meseleler dışında yüce amaçlar için de ellerinden geleni yaparlar. Genel geçer kurallara uyar ve takdir edilip pohpohlanmayı severler.');
                score.append('</br><strong>Ünlü ESFJ’Ler:</strong></br> Taylor Swift, Bill Clinton, Penelope Cruz, Hugh Jackman…');
            }
        }
        if (sonuc == 'ISTP' || sonuc == 'ISFP' || sonuc == 'ESTP' || sonuc == 'ESFP') {

            if (sonuc == 'ISTP') {
                score.append('<strong style="font-size:22px">Testi başarıyla tamamladınız.Kişilik envanter testinizin sonucu: ' + sonuc + "</strong></br>");
                score.append('<strong  style="font-size:20px">Kaşifler Grubu:</strong></br>')
                score.append('Kaşifler grubunda yer alan ISTP’ler ise merakları ile öne çıkarlar. Bir şeyi parçalara ayırmaktan, tamir etmekten, yeni şeyler üretmekten hoşlanan ISTP’ler harika mühendisler olabilirler. Fikir üretmek, sorun çözmek, deneme yapmaktan hoşlanan ISTP’ler, genellikle erkekler arasından çıkarlar.');
                score.append('</br><strong>Ünlü ISTP’Ler:</strong></br> Clint Eastwood, Milla Jovovich…');
            }
            if (sonuc == 'ISFP') {
                score.append('<strong style="font-size:22px">Testi başarıyla tamamladınız.Kişilik envanter testinizin sonucu: ' + sonuc + "</strong></br>");
                score.append('<strong  style="font-size:20px">Kaşifler Grubu:</strong></br>')
                score.append('Renkli ve farklı bir dünyaları olan ISFP’ler, gerçek sanatkarlar olarak tanımlanmaktadır. İçe dönük olan bu kişiler, yenilenebilmek için yalnız kalmaya ihtiyaç duyarlar. Farklı şeyler denemekten ve tecrübe edinmekten hoşlanan ISFP’ler tutkularının peşlerinden giderler.');
                score.append('</br><strong>Ünlü ISFP’Ler:</strong></br> Michael Jackson, Kevin Costner, Britney Spears…');
            }
            if (sonuc == 'ESTP') {
                score.append('<strong style="font-size:22px">Testi başarıyla tamamladınız.Kişilik envanter testinizin sonucu: ' + sonuc + "</strong></br>");
                score.append('<strong  style="font-size:20px">Kaşifler Grubu:</strong></br>')
                score.append(' İlgi merkezi olmayı seven ESTP’ler, mizah yetenekleri ve çekicilikleri ile her ortamda ışıldayan tiplerdir. Boşa zaman geçirmekten hoşlanmaz, sürekli hareket halinde olurlar. Sezgileri ve gözlm kabiliyetleri gelişmiş olan ESTP’ler, anı yaşayan, tutkulu ve enerjik insanlardır.');
                score.append('</br><strong>Ünlü ESTP’Ler:</strong></br> Jack Nicholson, Madonna…');
            }
            if (sonuc == 'ESFP') {
                score.append('<strong style="font-size:22px">Testi başarıyla tamamladınız.Kişilik envanter testinizin sonucu: ' + sonuc + "</strong></br>");
                score.append('<strong  style="font-size:20px">Kaşifler Grubu:</strong></br>')
                score.append('İçlerinden geldiği gibi hareket eden ESFP’ler bir anda ortaya çıkıp şarkı söylemeye başlayabilirler. İlginin onların üzerinde olmasına bayılır ve bunun için ekstra çaba sarf ederler. Estetiğe önem veren ve bu konularda başarılı olan ESFP’ler, tüm bu özelliklerinin yanı sıra diğerlerine karşı da duyarlı davranmayı bilirler.');
                score.append('</br><strong>Ünlü ESFP’Ler:</strong></br> Adele, Marilyn Monroe, Jamie Foxx…');
            }
        }
        return score;
    }
})();