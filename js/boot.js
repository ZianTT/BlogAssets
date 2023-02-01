/* global ZianTT */

ZianTT.boot = {};

ZianTT.boot.registerEvents = function() {
  ZianTT.events.billboard();
  ZianTT.events.registerNavbarEvent();
  ZianTT.events.registerParallaxEvent();
  ZianTT.events.registerScrollDownArrowEvent();
  ZianTT.events.registerScrollTopArrowEvent();
  ZianTT.events.registerImageLoadedEvent();
};

ZianTT.boot.refresh = function() {
  ZianTT.plugins.fancyBox();
  ZianTT.plugins.codeWidget();
  ZianTT.events.refresh();
};

document.addEventListener('DOMContentLoaded', function() {
  ZianTT.boot.registerEvents();
});
