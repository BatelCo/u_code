const PM = require('./classes')

test("addPicture should add a picture URL to the pictureURLs array", function () {


    //sanity 
    const picManager = new PM()
    expect(picManager.pictureURLs.length).toBe(0)

    picManager.addPicture("some_url")
    expect(picManager.pictureURLs.length).toBe(1)           //test
    expect(picManager.pictureURLs).toContain("some_url")    //double check 

    picManager.removePicture("some_url")
    expect(picManager.pictureURLs.length).toBe(0)           //test
    //expect(picManager.pictureURLs).toContain("some_url")    //double check 
})