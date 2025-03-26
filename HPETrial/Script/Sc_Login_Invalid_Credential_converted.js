function Login_valid_credential(email, password)
{
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btChrome).Run("https://partner.hpe.com/web/prp");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'textboxOktaemailinput' control.
  Aliases.browser.pageSignInHpePartnerReadyPortal.sectionContent.sectionPortletLoginportlet.textboxOktaemailinput.Click();
  //Sets the text in the 'textboxOktaemailinput' text editor.
  Aliases.browser.pageSignInHpePartnerReadyPortal.sectionContent.sectionPortletLoginportlet.textboxOktaemailinput.SetText(email);
  //Clicks the 'buttonOktasigninbtn' button.
  Aliases.browser.pageSignInHpePartnerReadyPortal.sectionContent.sectionPortletLoginportlet.buttonOktasigninbtn.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageSignInHpePartnerReadyPortal2.Wait();
  //Clicks the 'passwordboxPassword' control.
  Aliases.browser.pageSignInHpePartnerReadyPortal2.passwordboxPassword.Click();
  //Sets the text in the 'passwordboxPassword' text editor.
  Aliases.browser.pageSignInHpePartnerReadyPortal2.passwordboxPassword.SetText(password);
  //Clicks the 'buttonOnepassSubmitBtn' button.
  Aliases.browser.pageSignInHpePartnerReadyPortal2.buttonOnepassSubmitBtn.ClickButton();
  //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
  Aliases.browser.pageBerandaHpePartnerReadyPortal.sectionContent.sectionTutupPesan.panelClosemsg.Click(2, 2);
}
