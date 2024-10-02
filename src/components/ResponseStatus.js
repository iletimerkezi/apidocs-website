import React from "react";
import Translate from '@docusaurus/Translate';

export default function ResponseStatus() {

  return (
    <>
      <h4 className="anchor anchorWithHideOnScrollNavbar_node_modules-@docusaurus-theme-classic-lib-theme-Heading-styles-module" id="status">
        status
        <a className="hash-link" href="#status" title="Başlığa doğrudan bağlantı">​</a>
      </h4>
      <p>
        <Translate id="responseStatus.description">
          İşlem durumu ile ilgili bilgi içerir. Bu etiket ile döndürülen değerler aynı zamanda HTTP yanıtının başlık bilgisine bakılarak da elde edilebilir. Bu etiket, yapılan her istekte standart olarak döndürülür. Alt etiketleri aşağıdaki gibidir
        </Translate>
      </p>
      <ul>
        <li>
          <strong>code: </strong> 
          <Translate id="responseStatus.code">
            İşlem durumunu belirten numerik değerdir.
          </Translate>
        </li>
        <li>
          <strong>message: </strong> 
          <Translate id="responseStatus.message">
            İşlem durumu hakkında bilgi mesajı içerir.
          </Translate>
        </li>
      </ul>
    </>
  )
}