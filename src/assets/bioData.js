const aboutMe = {
  title: 'About Me',
  text: 'In October of 2018 I decided to professionalize a career in Tech by attending the Ruby/Rails/React course at Epicodus. My decision to professionally transition myself out of Manufacturing and into the Tech industry was rooted in the acknowledgment of a lifelong passion and fascination with software development. Somewhere between building media servers for friends, building/operating an array of cryptocurrency mining rigs, and writing software used by the Burning Man Organization I realized that I needed to support my inherent passion for software development and enroll in a program that would channel this interest in the most effective, fulfilling and professional way. Tech is my passion, and I look forward to participating in this incredibly exciting industry.'
};


const projects = [
  {
    title: 'keyCatch',
    description: 'This app was my first to see real world adoption and use. It is a Python/Django app and was developed to solve a specific issue that plagued a team of volunteers that I manage at the annual Burning Man Event. Prior to its implementation, work-related shift keys were transferred from the outgoing shift to the incoming shift via a mutually agreed-upon hidden location. This process ignored serious safety/security concerns and resulted in frequent delays impacting critical aspects of our customer\'s operations. keyCatch replaces the manual hand-off process with a large electronic locker/dropbox system - operated by a Raspberry Pi, series of batteries and electrical relays - that logs key removal and deposit events for a given set of users. This system has reduced lost-key events by more than 50% since its initial introduction and has become an integral part of the event\'s reliable operation.',
    link: 'https://github.com/entegral/keyCatch',
    icon_code: 'vpn_key'
  },
  {
    title: 'Myner',
    description: `This application is a docker container that runs the T-Rex x16r mining algorithm. It does this through the use of nvidia's provided cuda-enabled docker container images. This permits rapid comparison of mining efficiency across various versions of cuda and T-rex versions. It is important to note that use of this(these) docker containers is reliant upon the selected cuda compatibility with the host's installed driver version.
    
    Also consider checking out the Rails server app that I have created as a convenient companion app to this project, Myner Server.`,
    link: 'https://github.com/entegral/myner',
    icon_code: 'attach_money'
  }, 
  {
    title: 'Myner Server',
    description: 'This application should be run on a docker host that has an active Myner container instance. It provides a web UI providing detailed information about the running mining software and allows the software to be started, stopped, or display up-to-date information. When run on a properly configured host it also permits a user to adjust overclock/underclock settings.',
    link: 'https://github.com/entegral/myner-server',
    icon_code: 'info'
  },
  {
    title: 'ActionWallet',
    description: 'This crypto cold wallet allows secure viewing of all your crypto assets in one place. No more hassling with multiple wallets to figure out what your funds look like, Action Wallet makes it easy! Your data is stored securely and no important details are kept, so you do not have to worry about your data being stored for nefarious purposes.',
    link: 'https://github.com/entegral/ActionWallet',
    icon_code: 'account_balance_wallet'
  },
];

export default {projects, aboutMe};