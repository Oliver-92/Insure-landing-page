// Cambia el icono de las redes sociales en el footer al pasar el mouse (hover)

document.addEventListener('DOMContentLoaded', function () {
  const iconMap = {
    'icon-facebook.svg': 'icon-facebook-hover.svg',
    'icon-twitter.svg': 'icon-twitter-hover.svg',
    'icon-pinterest.svg': 'icon-pinterest-hover.svg',
    'icon-instagram.svg': 'icon-instagram-hover.svg'
  };

  const footerIcons = document.querySelectorAll('.footer__icon');

  footerIcons.forEach(function (icon) {
    const originalSrc = icon.getAttribute('src');
    const filename = originalSrc.split('/').pop();
    const hoverSrc = originalSrc.replace(filename, iconMap[filename]);

    icon.addEventListener('mouseenter', function () {
      if (iconMap[filename]) {
        icon.setAttribute('src', hoverSrc);
      }
    });
    icon.addEventListener('mouseleave', function () {
      icon.setAttribute('src', originalSrc);
    });
  });
});
