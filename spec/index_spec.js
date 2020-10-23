const { newVisitor, listAll, deleteVisitor, updateVisitor, viewVisitor, deleteAll } = require("../src/index");

describe("newVisitor", () => {
    it("should have been called with name, age, dateOfVisit, timeOfVisit, assited by and comment", () => {
        const visitor = { newVisitor }
        spyOn(visitor, "newVisitor");
        visitor.newVisitor("Luke",21,"2020/06/01","11:24","Yvonne","for job interview");
        expect(visitor.newVisitor).toHaveBeenCalledWith("Luke", 21, "2020/06/01", "11:24", "Yvonne", "for job interview");
    });

    it("should check that nvPool is called",()=>{
        let fakePool= null;
        fakePool = {
            query:function(){}
        }
        spyOn(fakePool,"query").and.returnValue(3)
        newVisitor("Luke",21,"2020/06/01","11:24","Yvonne","for job interview",nvPool=fakePool)
        expect(fakePool.query).toHaveBeenCalled()
    });
});

describe("listAll", () => {
    it("should have been called", () => {
        const showAll = { listAll };
        spyOn(showAll, "listAll");
        showAll.listAll()
        expect(showAll.listAll).toHaveBeenCalled();
    });

    it("should check that laPool is called",()=>{
        let fakePool= null;
        fakePool = {
            query:function(){}
        }
        spyOn(fakePool,"query")
        listAll(nvPool=fakePool);
        expect(fakePool.query).toHaveBeenCalled()
        
    });
});

describe("deleteVisitor", () => {
    it("should have been called with id and name", () => {
        const deleted = { deleteVisitor };
        spyOn(deleted, "deleteVisitor");
        deleted.deleteVisitor(1, "Themba");
        expect(deleted.deleteVisitor).toHaveBeenCalledWith(1,"Themba");
    });

    it("should check that dvPool is called",()=>{
        let fakePool= null;
        fakePool = {
            query:function(){}
        }
        spyOn(fakePool,"query")
        deleteVisitor(1,"James", dvPool=fakePool);
        expect(fakePool.query).toHaveBeenCalled()
    });
});

describe("updateVisitor", () => {
    it("should have been called with column name, new value and id", () => {
        const updated = { updateVisitor };
        spyOn(updated, "updateVisitor");
        updated.updateVisitor("name","Themba",1)
        expect(updated.updateVisitor).toHaveBeenCalledWith("name","Themba",1);
    });

    it("should check that laPool is called",()=>{
        let fakePool = null;
        fakePool = {
            query:function(){}
        }
        spyOn(fakePool,"query")
        updateVisitor("name","Shaun", 2, uvPool=fakePool);
        expect(fakePool.query).toHaveBeenCalled()
        
    });
});

describe("viewVisitor", () => {
    it("should have been called with id", () => {
        const view = { viewVisitor };
        spyOn(view, "viewVisitor");
        view.viewVisitor(1);
        expect(view.viewVisitor).toHaveBeenCalledWith(1);
    });

    it("should check that laPool is called",()=>{
        let fakePool = null;
        fakePool = {
            query:function(){}
        }
        spyOn(fakePool,"query")
        viewVisitor(2, vvPool=fakePool);
        expect(fakePool.query).toHaveBeenCalled()
        
    });
});

describe("deleteAll", () => {
    it("havebeen called", () => {
        const deletedAll = { deleteAll };
        spyOn(deletedAll, "deleteAll")
        deletedAll.deleteAll();
        expect(deletedAll.deleteAll).toHaveBeenCalled();
    });

    it("should check that laPool is called",()=>{
        let fakePool = null;
        fakePool = {
            query:function(){}
        }
        spyOn(fakePool,"query")
        deleteAll(daPool=fakePool);
        expect(fakePool.query).toHaveBeenCalled()
        
    });
});
