db = db.getSiblingDB("workflows_db")

db.createCollection("datasets_cl")
db.datasets_cl.createIndex({"state": 1})
db.datasets_cl.createIndex({"lastUpdatedDate": 1})
db.datasets_cl.createIndex({"path": 1})

db.createCollection("datasets_log_cl")
db.datasets_log_cl.createIndex({"marker": 1})
db.datasets_log_cl.createIndex({"seq": 1})

db.createCollection("actions_cl")
db.actions_cl.createIndex({"state": 1})
db.actions_cl.createIndex({"lastUpdatedDate": 1})
db.actions_cl.createIndex({"marker": 1})

db.createCollection("counters")

db.createCollection("workflows_log_cl")



