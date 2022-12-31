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
        self.driver = webdriver.Chrome('/Users/alperenoznam/Desktop/project/testing/chromedriver')

    def test_search_in_tff_ras(self):
        driver = self.driver
        time.sleep(2)


        ###this part is essential for every test case we need to login
        driver.get("http://localhost:3000/register")
        self.assertIn("TFF RAS", driver.title)
        email = driver.find_element(By.NAME, "email")
        password = driver.find_element(By.NAME, "password")
        email.send_keys("alperenoznam02@icloud.comm")
        time.sleep(2)
        password.send_keys("fuckthıscourse")
        time.sleep(2)
        password.send_keys(Keys.RETURN)
        element_present = EC.presence_of_element_located((By.CLASS_NAME, "text-field"))
        WebDriverWait(driver, 5).until(element_present)
        ###

        #continue with what you want
        objection = driver.find_element(By.XPATH, "//*[@id='root']/section/main/aside[2]/div/div/div/a[5]")
        objection.click()
        time.sleep(1)
        change = driver.find_element(By.XPATH, "//*[@id='root']/section/main/div/div/main/button")
        change.click()
        time.sleep(1)
        refID = driver.find_element(By.NAME, "searchId")
        refID.send_keys("20160")
        time.sleep(1)
        refID.send_keys(Keys.RETURN)
        element_present = EC.presence_of_element_located((By.CLASS_NAME, "card-body"))
        WebDriverWait(driver, 5).until(element_present)
        
        comment = driver.find_element(By.XPATH, "//*[@id='63a08b2d8fdc6f480b0acef8']/div/div/input")
        comment.clear()
        comment.send_keys("testing working")
        time.sleep(1)
        save = driver.find_element(By.XPATH, "//*[@id='63a08b2d8fdc6f480b0acef8']/div/button")
        save.click()
        time.sleep(2)



    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()
