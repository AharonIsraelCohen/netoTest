pipeline {
  
  environment {
    registry = "ac770/netomedia"
  }
  
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
    
    stage('Building image') {
      steps{
        sh 'sudo docker build -t test .'
      }
    }
    
    stage('Login to DockerHub') {
      steps{
        sh 'sudo docker login -u $username -p $token'
      }
    }
    
    stage('Push image') {
      steps{
        sh 'sudo docker push'
      }
    }
  
     stage('Remove Unused docker image') {
      steps{
        sh "docker rmi test"
      }
    }
    
  }
}

