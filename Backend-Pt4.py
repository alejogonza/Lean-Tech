#Create a functionality within the application that allows you to connect to a database and show all the records of the product table (id_product, reference, description, unit, SalePrice, Status) and allows you to ﬁlter by description and status.
import pandas as pd
def reader ():
  csvread = pd.read_csv('tabla.csv', skip_blank_lines=True,skipinitialspace=True).to_dict()#Read csv and create a dict
  dfcsv= pd.DataFrame(csvread)#Convert dict to DataFrame
  #dfcsv['descriptioni']= dfcsv['descriptioni'].astype(str)
  print('Dataframe: ', '\n', dfcsv,'\n')#Show the dataframe
  desclookup='insecto'#Criteria to filter column Description. Must be STR value, no caps sensitive.
  query1todesc=dfcsv[dfcsv['description'].str.contains(desclookup,case=False)]#Lookup for description, no case sensitive.
  print('Busqueda 1: ', '\n', query1todesc, '\n')#Print result.
  statuslookup='unavailable'#Criteria to evaluate Column Status.
  query2tostatus=dfcsv[dfcsv['Status'].str.contains(statuslookup,case=False)]
  print('Busqueda 2: ', '\n', query2tostatus)#Show result
reader()
