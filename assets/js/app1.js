export default {
    data() {
      return {
        users: [
          { firstName: 'Jean', lastName: 'Neymar', email: 'jean.neymar@rlb.fr', status: 'Actif' },
          { firstName: 'Samuel', lastName: 'Ropierd', email: 'samro@hotmail.fr', status: 'Inactif' },
          { firstName: 'Julie', lastName: 'Monnade', email: 'ju.limo@hotmail.fr', status: 'Inactif' },
          { firstName: 'Céline', lastName: 'Didion', email: 'almost-diva@musical.io', status: 'Actif' },
          { firstName: 'Loic', lastName: 'Grenac\'h', email: 'logr@proton.bzh', status: 'Actif' }
        ]
      };
    },
    methods: {
      toggleStatus(user) {
        user.status = user.status === 'Actif' ? 'Inactif' : 'Actif';
      }
    }
  };