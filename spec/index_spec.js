const { newVisitor, listAll,deleteVisitor,updateVisitor,viewVisitor,deleteAll } = require("../src/index");

describe("newVisitor",()=>{
    it("havebeen called",()=>{
        const visitor = {newVisitor}
        spyOn(visitor, "newVisitor")
        let visitorSpy = visitor.newVisitor("Luke",21,"2020/06/01","11:24","Yvonne","for job intervie")
        expect(visitor.newVisitor).toHaveBeenCalledWith("Luke",21,"2020/06/01","11:24","Yvonne","for job interview");
    });
});

describe("listAll",()=>{
    it("havebeen called",()=>{
        expect(listAll()).toHaveBeenCalled();
    });
});

describe("deleteVisitor",()=>{
    it("havebeen called",()=>{
        expect(deleteVisitor()).toHaveBeenCalled();
    });
});

describe("updateVisitor",()=>{
    it("havebeen called",()=>{
        expect(updateVisitor()).toHaveBeenCalled();
    });
});

describe("viewVisitor",()=>{
    it("havebeen called",()=>{
        expect(viewVisitor()).toHaveBeenCalled();
    });
});

describe("deleteAll",()=>{
    it("havebeen called",()=>{
        expect(deleteAll()).toHaveBeenCalled();
    });
});