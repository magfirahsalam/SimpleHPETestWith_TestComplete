﻿function Test1()
{
  let browser = Aliases.browser;
  let browserWindow = browser.BrowserWindow;
  browserWindow.Click(152, 114);
  Browsers.Item(btChrome).Navigate("https://partner.hpe.com/group/prp/home");
  browserWindow.Maximize();
  let page = browser.pageBerandaHpePartnerReadyPortal;
  page.sectionContent.sectionTutupPesan.panelClosemsg.Click();
  browser.pageBerandaHpePartnerReadyPortal.MouseWheel(-4);
  browser.pageBerandaHpePartnerReadyPortal.MouseWheel(4);
  let image = page.headerBanner;
  image.textnode0.link.imageSearchSvg.Click();
  let textbox = image.textboxCustomcommonsearch;
  textbox.Click();
  textbox.SetText("new order request");
  textbox.Keys("[Enter]");
  page = browser.pageCustomSearch;
  page.Wait();
  let textNode = page.sectionContent.sectionPortletComHpePrpGlobalSea;
  textNode.labelKontenDanAlat.textnode7.Click();
  textNode.labelBulanTerakhir.textnode4.Click();
}