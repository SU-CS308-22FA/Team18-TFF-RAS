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

    def test_search_in_tff_ras(self):
        driver = self.driver
        time.sleep(2)
        # this part is essential for every test case we need to login
        driver.get("http://localhost:3000/register")
        self.assertIn("TFF RAS", driver.title)
        email = driver.find_element(By.NAME, "email")
        password = driver.find_element(By.NAME, "password")
        email.send_keys("assigner@gmail.com")
        time.sleep(2)
        password.send_keys("assigner")
        time.sleep(2)
        password.send_keys(Keys.RETURN)
        element_present = EC.presence_of_element_located(
            (By.CLASS_NAME, "text-field"))
        WebDriverWait(driver, 5).until(element_present)
        ###

        # continue with what you want
        assignment_page = driver.find_element(
            By.XPATH, "//*[@id='root']/section/main/aside[2]/div/div/div/a[5]")
        time.sleep(1)
        assignment_page.click()
        time.sleep(2)
        match_page = driver.find_element(
            By.XPATH, "//*[@id='root']/section/main/div/div/div[1]/button[3]")
        match_page.click()
        time.sleep(2)
        match = driver.find_element(By.CSS_SELECTOR, "input[type='checkbox']")
        time.sleep(1)
        match.click()
        time.sleep(1)
        ref_page = driver.find_element(
            By.XPATH, "//*[@id='root']/section/main/div/div/div[1]/button[2]")
        ref_page.click()
        time.sleep(3)
        ref = driver.find_element(By.CSS_SELECTOR, "input[type='checkbox']")
        ref.click()
        time.sleep(1)
        home_page = driver.find_element(
            By.XPATH, "//*[@id='root']/section/main/div/div/div/div/div[1]/div[1]/button[1]")
        home_page.click()
        time.sleep(3)
        reset = driver.find_element(
            By.XPATH, "//*[@id='root']/section/main/div/div/div[2]/div/div/div[1]/div/button")
        reset.click()
        time.sleep(2)

        self.assertIn("Please choose a referee from Referees",
                      driver.page_source)
        self.assertIn("Also please choose a match first",
                      driver.page_source)
        self.assertIn("Please choose a match from Matches",
                      driver.page_source)
        time.sleep(2)

    def tearDown(self):
        self.driver.close()


if __name__ == "__main__":
    unittest.main()
