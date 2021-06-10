pipeline {
  agent any
    
  tools {nodejs "nodeJS"}
    
  stages {
    
    stage('Cloning Git') {
      steps {
        sh 'rm -rf *'
        git 'https://github.com/AharonIsraelCohen/netomedia.git'
        sh 'cd app && ls -l'
        sh 'npm install'
        sh 'npm run test'
        sh 'npm run build'
      }
    }    
  }
}
