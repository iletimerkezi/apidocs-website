import React from "react";
import Translate from '@docusaurus/Translate';

export default function AccessDescription() {

  return (
    <>
      <h4 className="anchor anchorWithHideOnScrollNavbar_node_modules-@docusaurus-theme-classic-lib-theme-Heading-styles-module" id="authentication">
        authentication
        <a className="hash-link" href="#authentication" title="Başlığa doğrudan bağlantı">​</a>
      </h4>
      <p>
        <Translate id="accessDescription.description">
          İstek yapılan işleme dair yetki alabilmek için gönderilmesi gereken kullanıcı bilgileridir. Alt etiketleri aşağıdaki gibidir:
        </Translate>
      </p>
      <ul>
        <li>
          <p><strong>key: </strong> 
          <Translate id="accessDescription.key">
            iletimerkezi.com panelinize giriş yaptıktan sonra ayarlar bölümünden oluşturabileceğiniz API Anahtar bu alana yazılmalıdır. İstek yapılırken gönderilmesi zorunludur.
          </Translate>
          </p>
        </li>
        <li>
          <p>
            <strong>hash: </strong> 
            <Translate id="accessDescription.hash">
              iletimerkezi.com panelinize giriş yaptıktan sonra ayarlar bölümünden oluşturabileceğiniz API Anahtar ve Gizli Anahtar kullanılarak oluşturulmuş hash bu alana yazılmalıdır. İstek yapılırken gönderilmesi zorunludur.
            </Translate>  
          </p>
        </li>
      </ul>
    </>
  )
}