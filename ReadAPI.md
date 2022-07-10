

Course 
    - getList
        url : https://nitc.cleverapps.io/api/courses/
        method : get
    - remove
        url : https://nitc.cleverapps.io/api/courses/1
        method : delete
    - create
        url : https://nitc.cleverapps.io/api/courses/1
        method : post
        data : {
            "name": "", // not null
            "price": 10, integer
            "description": "des", string 
            "status": 1 // (1,0)
        }
    - create
        url : https://nitc.cleverapps.io/api/courses/1
        method : put
        data : {
            "couse_id" : 1,
            "name": "", // not null
            "price": 10, integer
            "description": "des", string 
            "status": 1 // (1,0)
        }