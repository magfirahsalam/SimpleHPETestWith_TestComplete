﻿function Test1()
{
  
//Browsers.Item("chrome").RunOptions = "--disable-web-security --user-data-dir=\"C:\\Users\\magfi\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 5\Default\" --disable-site-isolation-trials";
 // Browsers.Item(btChrome).Run("https://partner.hpe.com/");

  let browser = Aliases.browser;
  let browserWindow = browser.BrowserWindow;
 // browserWindow.Click(163, 106);
  Browsers.Item(btChrome).Navigate("https://partner.hpe.com/");
  browserWindow.Maximize();
 let page = browser.pagePartnerHpeCom;
  page.sectionContent.sectionTutupPesan.panelClosemsg.Click();
  page.sectionSidenavbar.textnodeHalamanSitus.linkHpePartnerReadyVantage.textnode.Click();
  page.navTestsecondsidenavi.textnodeHalamanSitus2.linkSellTrack.Click();
  page.navTestsidenavi.textnodeHalamanSitus3.textnodeSellTrack.linkAsAService.Click();
}