// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SMS API = İletiMerkezi | PHP, Node.js, C#, .Net, GoLang, Rust, Ruby, Python & Java ile SMS Gönder',
  tagline: '❤️ Developers first!',
  url: 'https://toplusmsapi.com',
  baseUrl: '/',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          hideable: false
        }
      },
      navbar: {
        style: 'dark',
        hideOnScroll: true,
        title: '',
        logo: {
          alt: 'İleti Merkezi API Dökümanı',
          src: 'img/logo.png',
          href: '/',
        },
        items: [
          {
            href: 'https://www.iletimerkezi.com/panel/auth/signup',
            label: 'Üye Ol',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
				logo: {
          alt: 'İleti Merkezi API Dökümanı',
          src: 'img/logo.png',
          href: '/',
        },
        links: [
          {
            title: 'Çözümler',
            items: [
              {
                label: 'İleti Merkezi',
								href: 'https://www.iletimerkezi.com',
              },
              {
                label: 'Opencart SMS',
								href: 'https://opencartsms.com',
              },
              {
                label: 'Prestashop SMS',
								href: 'https://prestashopsms.com',
              },
              {
                label: 'Magento SMS',
								href: 'https://magesmsextension.com',
              },
              {
                label: 'WHMCS SMS',
								href: 'https://www.whmcssms.com',
              },
            ],
          },
          {
            title: 'Biz Kimiz?',
            items: [
              {
                label: 'İletişim',
                href: 'https://www.iletimerkezi.com/iletisim',
              },
              {
                label: 'Hakkımızda',
                href: 'https://www.iletimerkezi.com/hakkimizda',
              },
            ],
          },
					{
						title: 'Blog',
						items: [
							{
								label: 'SMS ile Doğrulama',
								href: 'https://www.iletimerkezi.com/blog/gelistiriciler/php-sms-onay-sistemi'
							},
							{
								label: 'SMS API ile İletişim Formu',
								href: 'https://www.iletimerkezi.com/blog/gelistiriciler/php-sms-api-iletisim-formu'
							},
							{
								label: 'Yazılımınızın Güvenliğini SMS ile Arttırın',
								href: 'https://www.iletimerkezi.com/blog/gelistiriciler/yaziliminizin-guvenligini-sms-ile-arttirin'
							}
						]
					}
        ],
        copyright: `Copyright © 2013 - ${new Date().getFullYear()} eMarka İletişim ve Bilgi Teknolojileri A.Ş.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
          'visual-basic', 'aspnet', 'php', 'java', 'python', 'ruby', 'csharp'
        ],
      },
    }),
};

module.exports = config;
