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
        self.driver = webdriver.Chrome('./chromedriver.exe')

    def test_view_reports_in_tff_ras(self):
        driver = self.driver
        time.sleep(2)


        ###this part is essential for every test case we need to login
        driver.get("http://localhost:3000/register")
        self.assertIn("TFF RAS", driver.title)
        email = driver.find_element(By.NAME, "email")
        password = driver.find_element(By.NAME, "password")
        email.send_keys("buh@gmail.com")
        time.sleep(2)
        password.send_keys("12345678")
        time.sleep(2)
        password.send_keys(Keys.RETURN)
        element_present = EC.presence_of_element_located((By.CLASS_NAME, "text-field"))
        WebDriverWait(driver, 5).until(element_present)

        #continue with what you want
        elem = driver.find_element(By.XPATH, "//*[@id='root']/section/main/aside[2]/div/div/div/a[5]")
        elem.click()
        time.sleep(8)
        self.assertIn("13", driver.page_source)
        elem = driver.find_element(By.XPATH, "//*[@id='root']/section/main/div/div/section/div/article[1]/div/footer/div/a")
        elem.click()
        # elem.send_keys(Keys.RETURN)
        time.sleep(2)
        elem = driver.find_element(By.XPATH, "//*[@id='root']/section/main/div/div/section/form/div[1]/article[1]/div/ul/li[5]/label/input")
        elem.click()

        elem = driver.find_element(By.XPATH, "//*[@id='root']/section/main/div/div/section/form/div[1]/article[2]/div/ul/li[5]/label/input")
        elem.click()

        elem = driver.find_element(By.XPATH, "//*[@id='root']/section/main/div/div/section/form/div[2]/article[1]/div/ul/li[5]/label/input")
        elem.click()

        elem = driver.find_element(By.XPATH, "//*[@id='comments']")
        elem.send_keys("Good officiating")
        
        elem = driver.find_element(By.XPATH, "//*[@id='root']/section/main/div/div/section/form/div[2]/article[2]/div/ul/li[5]/label/input")
        elem.click()
        elem.send_keys(Keys.RETURN)
        
        time.sleep(6)
        self.assertIn("12", driver.page_source)

    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()