function Test1()
{
  let browser = Aliases.browser;
  //let browserWindow = browser.BrowserWindow;
  //browserWindow.Click(153, 110);
  Browsers.Item(btChrome).Navigate("https://partner.hpe.com/group/prp/home");
  //browserWindow.Maximize();
  let page = browser.pageBerandaHpePartnerReadyPortal;
  page.sectionContent.sectionTutupPesan.panelClosemsg.Click();
  let image = page.headerBanner.textnode0;
  image.linkUsericonimg.imageUserSvg.Click();
  image.textnodeKeluar.linkKeluar.Click();
  browser.pageSignInHpePartnerReadyPortal.MouseWheel(-7);
}