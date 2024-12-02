const config = require('config');

module.exports = () => {
    // Register our greeting widget
    const greetingWidget = {
        greeting_widget: {
            setting_component:
                'greeting_widget/components/widget/GreetingWidgetSetting.jsx',
            component:
                'greeting_widget/components/widget/GreetingWidget.jsx',
            name: 'My greeting Widget',
            description: 'A simple greeting widget',
            default_settings: {
                
            },
            enabled: true
        }
    };
    config.util.setModuleDefaults('widgets', greetingWidget);
}