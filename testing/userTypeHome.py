import unittest
from selenium import webdriver
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoAlertPresentException
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import time
class PythonOrgSearch(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome('./chromedriver')

    def test_search_in_tff_ras(self):
        driver = self.driver
        time.sleep(2)


        ###this part is essential for every test case we need to login
        driver.get("http://localhost:3000/register")
        self.assertIn("TFF RAS", driver.title)
        email = driver.find_element(By.NAME, "email")
        password = driver.find_element(By.NAME, "password")
        email.send_keys("fan@gmail.com")
        time.sleep(2)
        password.send_keys("fanfan")
        time.sleep(2)
        password.send_keys(Keys.RETURN)
        element_present = EC.presence_of_element_located((By.CLASS_NAME, "text-field"))
        WebDriverWait(driver, 5).until(element_present)
        time.sleep(2)
        self.assertNotIn("Objections", driver.page_source)


    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()
