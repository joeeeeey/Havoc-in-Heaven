require 'spec_helper'

describe "StaticPages" do
  describe "Home page" do
    it "should have the content 'Sample App'" do
      visit '/static_pages/home'
      expect(page).to have_content('Sample App')
    end
     it "should have the content ' This is the home page for the'" do
      visit '/static_pages/home'
      expect(page).to have_content(' This is the home page for the')
    end
  end
  describe "Help page" do
  	it "should have the content 'Help'" do
      visit '/static_pages/help'
      expect(page).to have_content('Help')
    end
    it "should have the content 'on the Ruby on Rails Tutorial'" do
      visit '/static_pages/help'
      expect(page).to have_content('on the Ruby on Rails Tutorial')
    end
  end

   describe "About page" do
  	it "should have the content 'About'" do
      visit '/static_pages/about'
      expect(page).to have_content('About')
    end

    it "should have the content 'project to make a book and screencasts to teach web development'" do
      visit '/static_pages/about'
      expect(page).to have_content('project to make a book and screencasts to teach web development')
    end
end

end

