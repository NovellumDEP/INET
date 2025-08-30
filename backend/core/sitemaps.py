from django.contrib.sitemaps import Sitemap

#NEEDS TO BE UPDATED DEPENDING ON SITE TYPE
class GymForgeSitemap(Sitemap):
    priority = 0.8
    changefreq = 'monthly'
    protocol = 'https'

    def items(self):
        return [
            ('home', 1.0, 'weekly'),
            ('services', 0.8, 'monthly'), 
            ('pricing', 0.8, 'monthly'),
            ('contact', 0.7, 'monthly'),
            ('careers', 0.6, 'monthly'),
        ]

    def location(self, item):
        return f"/{item[0]}/" if item[0] != 'home' else '/'
    
    def priority(self, item):
        return item[1]
        
    def changefreq(self, item):
        return item[2]