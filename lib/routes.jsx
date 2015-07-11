FlowRouter.route('/',{
    action : function(p,q){
        ReactLayout.render(MainLayout, {
            content: <WelcomeComponent name="Arunoda" />
        })
    }
})