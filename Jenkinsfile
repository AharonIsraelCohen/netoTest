pipeline {
  agent any
    
  tools {nodejs "nodeJS"}
    
  stages {
    
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
     
    stage('Test') {
      steps {
         sh 'npm run test'
      }
    }

    stage('Build') {
      steps {
         sh 'npm run build'
      }
    }    
  }
}
