import React from "react";
import Translate from '@docusaurus/Translate';
import Badge from '@site/src/components/Badge';

export default function ErrorCodeTable({codes = [], type = "XML"}) {

  const codesMap = [
    {
      code: 400, 
      message: "İstek çözümlenemedi", 
      description: <>POST ettiğiniz {type}'in yapısındaki hatadan kaynaklanır. Bu hatalar genellikle, yanlış yazılan {type} etiketi, düzgün kapatılmayan XML etiketi veya CDATA kullanılmadan {type}'in yapısını bozabilecek bir karakterin kullanımından kaynaklanır.</>
    },
    {
      code: 401, 
      message: "Üyelik bilgileri hatalı", 
      description: <>POST ettiğiniz {type}'in <Badge>authentication</Badge> etiketi içerisinde göndermiş olduğunuz bilgileri doğrulayamadığımızda bu hatayı veriyoruz, eğer hesabınızda sabit IP tanımladıysanız ve farklı bir IP üzerinden istek yapıyorsanız yine bu hatayı alırsınız.</>
    },
    {
      code: 402,
      message: "Bakiye yetersiz",
      description: "Eğer hesabınızdaki bakiye bu siparişi göndermeye yetmiyorsa bu hatayı veriyoruz."
    },
    {
      code: 404, 
      message: "API istek yapılan yönteme sahip değil", 
      description: "Eğer bu hatayı alıyorsanız istek yaptığınız adresi tekrar kontrol edin yanlış bir adrese istek yapıyor olabilirsiniz."
    },
    {
      code: 450,
      message: "Gönderilen başlık kullanıma uygun değil",
      description: <><Badge>sender</Badge> etiketi ile göndermiş olduğunuz değer eğer hesabınızda onaylı değilse bu hatayı alırsınız, hesabınızda tanımlı olduğu şekilde göndermeniz gerekmektedir. Genellikle bu hatanın alınmasına sebep olan değişiklikler, küçük-büyük harf farkları veya ektra boşluk değerlerinin gönderilmesidir.</>
    },
    {
      code: 451,
      message: "Tekrar eden sipariş",
      description: "Eğer aynı mesaj metnini, aynı alıcılara 10dk içinde tekrar göndermek isterseniz sistem bu hatayı size döner, hem spam olmaması hemde yanlışlıkla aynı kişilere aynı mesajların iletilmemesi için. Böyle bir gönderim ihtiyacınız varsa mesaj metninin içine o anki saat ve dakikayı yazarak mesaj metnini farklılaştırabilirsiniz."
    },
    {
      code: 452,
      message: "Mesaj alıcıları hatalı",
      description: <><Badge>receipents</Badge> etiketi ile göndermiş olduğunuz telefon numaraları eksik veya doğrulanamıyor ise bu hatayı veriyoruz. Aynı zamanda eğer mesaj atmak istediğiniz cep telefonu numarasının doğru olduğuna eminseniz, cep telefonu numarası eğer numara engelleme listenize eklediyseniz yine bu hatayı alabilirsiniz.</>
    },
    {
      code: 453,
      message: "Sipariş boyutu aşıldı",
      description: <><Badge>text</Badge> etiketi ile göndermiş olduğunuz mesaj metni karakter kodlamanıza göre yedi(7) SMS uzunluğundan daha fazla ise bu hata geri döner.</>
    },
    {
      code: 454,
      message: "Mesaj metni boş",
      description: <><Badge>text</Badge> parametresinde göndermiş olduğunuz mesaj metni herhangi bir değer içermiyorsa mesajınız gönderilmez ve bu hata mesajı döner.</>
    },
    {
      code: 455,
      message: "Sipariş bulunamadı",
      description: "İstek içerisinde iletmiş olduğunuz id ile oluşturulmuş bir sipariş yoksa veya sipariş gönderimi bekliyor durumundan iletiliyor durumuna geçti ise bu hatayı alırsınız."
    },
    {
      code: 456,
      message: "Sipariş gönderim tarihi henüz gelmedi",
      description: <>İstek içerisinde iletmiş olduğunuz <Badge>id</Badge> ile oluşturulmuş sipariş ileri tarihli bir gönderimse ve gönderim tarihi henüz gelmemiş ise bu hatayı alırsınız.</>
    },
    {
      code: 457,
      message: "Mesaj gönderim tarihinin formatı hatalı",
      description: <><Badge>sendDateTime</Badge> etiketi ile göndermiş olduğunuz tarih formatı hatalı ise bu hata döner. Tarih formatı, GG/AA/YYYY SS:DD (Örnek 20/01/2022 13:45) şeklindedir.</>
    },
    {
      code: 458,
      message: "Tarih aralığı hatalı.",
      description: "Gönderdiğiniz tarih formatı veya tarih aralığınız 10 günden daha fazla."
    },
    {
      code: 461,
      message: "Grup adını boş bırakamazsınız.",
      description: "Grup adı boş bırakıldığında bu hatayı alırsınız."
    },
    {
      code: 462,
      message: "Grup id alanını boş bırakamazsınız.",
      description: "Grup id alanındaki değeri boş veya hesabınızda tanımlı olmayan bir grup id değeri gönderdiğinizde bu hatayı alırsınız."
    },
    {
      code: 463,
      message: "Böyle bir grup bulunamadı.",
      description: "Parent etiketi içindeki group id değeri hatalı ise bu hatayı alırsınız."
    },
    {
      code: 465,
      message: "Kişi bulunamadı.",
      description: "Eğer grup içerisinde herhangi bir kişi bulunamadıysa bu hatayı alırsınız."
    },
    {
      code: 466, 
      message: "Hatalı numara", 
      description: "İstek içeriğindeki numara hatalı ise bu hatayı alırsınız."
    },
    {
      code: 468,
      message: "IYS üzerinden sorgulama yapılıp, yapılmayacağını ayarlamalısınız.",
      description: "IYS üzerinden sorgulama yapılıp, yapılmayacağını ayarlamalısınız."
    },
    {
      code: 469,
      message: "IYS listenizi seçmelisiniz, BIREYSEL veya TACIR.",
      description: "IYS listenizi seçmelisiniz, BIREYSEL veya TACIR."
    },
    {
      code: 470,
      message: "IYS kodunuzu ayarlamalısınız.",
      description: "IYS kodunuzu ayarlamalısınız."
    },    
    {
      code: 471,
      message: "Arama terimi en az 3 karakter olmalıdır.",
      description: "Arama yaparken en az 3 karakterlik bir kelime girmeniz gerekmektedir."
    },
    {
      code: 472,
      message: "Ad, soyad, cep telefonu, email alanlarından en az biri dolu olmalıdır.",
      description: "Ad, soyad, cep telefonu, email alanlarından en az biri dolu olmalıdır."
    },
    {
      code: 473,
      message: "Özel alan bulunamadı.",
      description: "Özel alan bulunamadı."
    }
  ]

  let errors = codes.includes('*') ? codesMap : codesMap.filter((item) => codes.includes(item.code));  

	return (
    <>
      <p>
        <Translate id="errorCodeTable.description">
          Eğer istek sonucu olumsuz ise sunucu tarafından size dönücek hata kodları ve mesajlar aşağıdaki gibidir.
        </Translate>
      </p>
      <table>
        <thead>
          <tr>
            <th>
              <Translate id="errorCodeTable.column.code">
                Hata Kodu
              </Translate>
            </th>
            <th>
              <Translate id="errorCodeTable.column.message">
                Mesaj
              </Translate>
            </th>
            <th>
              <Translate id="errorCodeTable.column.description">
                Açıklama
              </Translate>
            </th>
          </tr>
        </thead>
        <tbody>
          {errors.map((error) => {
            return (
              <tr key={"err_" + error.code}>
                <td>{error.code}</td>
                <td>{error.message}</td>
                <td>{error.description}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
	)
}