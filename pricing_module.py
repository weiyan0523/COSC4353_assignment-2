
class pricing_module:

    current_price = 1.50
    company_profit_factor = 0.10

    def __init__(self, location_factor, history_factor, gallons_requested):
        self.location_factor = location_factor
        self.history_factor = history_factor
        self.gallons_requested = gallons_requested

    def calculate_margin(self):
        #To be implemented
        #(Margin =  Current Price * (Location Factor - Rate History Factor + Gallons Requested Factor + Company Profit Factor))
        pass

    def calculate_price(self):
        #To be implemented
        #Suggested Price = Current Price + Margin
        pass