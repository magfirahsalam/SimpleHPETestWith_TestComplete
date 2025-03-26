function Test1()
{
  Browsers.Item("chrome").RunOptions = "--disable-web-security --user-data-dir=\"C:\\Users\\magfi\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 5\" --disable-site-isolation-trials";
  Browsers.Item(btChrome).Run("https://partner.hpe.com/web/prp");
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let textbox = browser.pageSignInHpePartnerReadyPortal.sectionContent.sectionPortletLoginportlet;
  let textbox2 = textbox.textboxOktaemailinput;
  textbox2.Click();
  textbox2.SetText("demo_indonesian_distributor@pproap.com");
  textbox.buttonOktasigninbtn.ClickButton();
  let page = browser.pageSignInHpePartnerReadyPortal2;
  page.Wait();
  let passwordBox = page.passwordboxPassword;
  passwordBox.Click();
  passwordBox.SetText(Project.Variables.Password1);
  page.buttonOnepassSubmitBtn.ClickButton();
  browser.pageBerandaHpePartnerReadyPortal.sectionContent.sectionTutupPesan.panelClosemsg.Click();
  browser.pageBerandaHpePartnerReadyPortal.MouseWheel(-4);
}