pipeline {
  
  environment {
    username = 'ac770'
    registry = "netomedia"
  }
  
  agent any
  
  tools {nodejs "nodeJS"}
    
  stages {
    
    stage('Install dependencies') {
      steps {
        sh 'npm install'
        sh 'echo $username'
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
        sh 'sudo docker build -t $username/$registry:$BUILD_NUMBER .'
      }
    }
    
    
    stage('Login to DockerHub') {
      steps{
        withCredentials([string(credentialsId: 'token', variable: 'token')]){
        sh 'sudo docker login -u $username -p $token'
        }
      }
    }
    
    stage('Push image') {
      steps{
        sh 'sudo docker push $username/$registry:$BUILD_NUMBER'
      }
    }
  
     stage('Remove Unused docker image') {
      steps{
        sh "sudo docker rmi $username/$registry:$BUILD_NUMBER"
      }
    }
    
  }
}

