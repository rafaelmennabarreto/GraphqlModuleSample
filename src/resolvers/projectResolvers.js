module.exports = {
  Query : {
    getProjects : () => {

      const projetos = [
        {
          id : 1,
          cliente : 25,
          users : [
            { id : 1 , name : 'rafael' , email : 'rafael' },
            { id : 2 , name : 'rafael2' , email : 'rafael2' }
          ]
        }
      ]

      return  projetos;
    }
  }
}