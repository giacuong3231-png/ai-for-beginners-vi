const GH_REPO = "giacuong3231-png/ai-for-beginners-vi";
const LESSONS = [
 {
  "key": "0-course-setup",
  "label": "Chuẩn bị",
  "desc": "Cài đặt & cách chạy khoá học",
  "lessons": [
   {
    "id": "0-course-setup/for-teachers.md",
    "name": "Dành cho Giáo viên",
    "doc": "translations/vi/lessons/0-course-setup/for-teachers.md",
    "nb": []
   },
   {
    "id": "0-course-setup/how-to-run.md",
    "name": "Cách Chạy Mã",
    "doc": "translations/vi/lessons/0-course-setup/how-to-run.md",
    "nb": []
   },
   {
    "id": "0-course-setup/setup.md",
    "name": "Bắt đầu với chương trình học này",
    "doc": "translations/vi/lessons/0-course-setup/setup.md",
    "nb": []
   }
  ]
 },
 {
  "key": "1-Intro",
  "label": "Nhập môn",
  "desc": "AI là gì, lịch sử, các cách tiếp cận",
  "lessons": [
   {
    "id": "1-Intro/README.md",
    "name": "Giới thiệu về AI",
    "doc": "translations/vi/lessons/1-Intro/README.md",
    "nb": []
   },
   {
    "id": "1-Intro/assignment.md",
    "name": "Game Jam",
    "doc": "translations/vi/lessons/1-Intro/assignment.md",
    "nb": []
   }
  ]
 },
 {
  "key": "2-Symbolic",
  "label": "AI ký hiệu",
  "desc": "Biểu diễn tri thức, hệ chuyên gia, ontology",
  "lessons": [
   {
    "id": "2-Symbolic/README.md",
    "name": "Đại diện tri thức và hệ chuyên gia",
    "doc": "translations/vi/lessons/2-Symbolic/README.md",
    "nb": [
     "translations/vi/lessons/2-Symbolic/Animals.ipynb",
     "translations/vi/lessons/2-Symbolic/FamilyOntology.ipynb",
     "translations/vi/lessons/2-Symbolic/MSConceptGraph.ipynb"
    ]
   },
   {
    "id": "2-Symbolic/assignment.md",
    "name": "Xây dựng một Ontology",
    "doc": "translations/vi/lessons/2-Symbolic/assignment.md",
    "nb": []
   }
  ]
 },
 {
  "key": "3-NeuralNetworks",
  "label": "Mạng nơ-ron",
  "desc": "Perceptron, tự viết framework, PyTorch/TensorFlow",
  "lessons": [
   {
    "id": "3-NeuralNetworks/README",
    "name": "Giới thiệu về Mạng Nơ-ron — tổng quan chương",
    "doc": "translations/vi/lessons/3-NeuralNetworks/README.md",
    "nb": []
   },
   {
    "id": "3-NeuralNetworks/03-Perceptron",
    "name": "Giới thiệu về Mạng Nơ-ron: Perceptron",
    "doc": "translations/vi/lessons/3-NeuralNetworks/03-Perceptron/README.md",
    "nb": [
     "translations/vi/lessons/3-NeuralNetworks/03-Perceptron/Perceptron.ipynb",
     "translations/vi/lessons/3-NeuralNetworks/03-Perceptron/lab/PerceptronMultiClass.ipynb"
    ]
   },
   {
    "id": "3-NeuralNetworks/04-OwnFramework",
    "name": "Giới thiệu về Mạng Neural. Perceptron Đa Tầng",
    "doc": "translations/vi/lessons/3-NeuralNetworks/04-OwnFramework/README.md",
    "nb": [
     "translations/vi/lessons/3-NeuralNetworks/04-OwnFramework/OwnFramework.ipynb",
     "translations/vi/lessons/3-NeuralNetworks/04-OwnFramework/lab/MyFW_MNIST.ipynb"
    ]
   },
   {
    "id": "3-NeuralNetworks/05-Frameworks",
    "name": "Các Framework Mạng Neural",
    "doc": "translations/vi/lessons/3-NeuralNetworks/05-Frameworks/README.md",
    "nb": [
     "translations/vi/lessons/3-NeuralNetworks/05-Frameworks/IntroKeras.ipynb",
     "translations/vi/lessons/3-NeuralNetworks/05-Frameworks/IntroKerasTF.ipynb",
     "translations/vi/lessons/3-NeuralNetworks/05-Frameworks/IntroPyTorch.ipynb",
     "translations/vi/lessons/3-NeuralNetworks/05-Frameworks/lab/LabFrameworks.ipynb"
    ]
   }
  ]
 },
 {
  "key": "4-ComputerVision",
  "label": "Thị giác máy tính",
  "desc": "CNN, transfer learning, GAN, nhận diện vật thể",
  "lessons": [
   {
    "id": "4-ComputerVision/README",
    "name": "Thị giác Máy tính — tổng quan chương",
    "doc": "translations/vi/lessons/4-ComputerVision/README.md",
    "nb": []
   },
   {
    "id": "4-ComputerVision/06-IntroCV",
    "name": "Giới thiệu về Thị giác Máy tính",
    "doc": "translations/vi/lessons/4-ComputerVision/06-IntroCV/README.md",
    "nb": [
     "translations/vi/lessons/4-ComputerVision/06-IntroCV/OpenCV.ipynb",
     "translations/vi/lessons/4-ComputerVision/06-IntroCV/lab/MovementDetection.ipynb"
    ]
   },
   {
    "id": "4-ComputerVision/07-ConvNets",
    "name": "Mạng Nơ-ron Tích Chập",
    "doc": "translations/vi/lessons/4-ComputerVision/07-ConvNets/README.md",
    "nb": [
     "translations/vi/lessons/4-ComputerVision/07-ConvNets/ConvNetsPyTorch.ipynb",
     "translations/vi/lessons/4-ComputerVision/07-ConvNets/ConvNetsTF.ipynb",
     "translations/vi/lessons/4-ComputerVision/07-ConvNets/lab/PetFaces.ipynb"
    ]
   },
   {
    "id": "4-ComputerVision/08-TransferLearning",
    "name": "Mạng Được Huấn Luyện Sẵn và Học Chuyển Giao",
    "doc": "translations/vi/lessons/4-ComputerVision/08-TransferLearning/README.md",
    "nb": [
     "translations/vi/lessons/4-ComputerVision/08-TransferLearning/AdversarialCat_TF.ipynb",
     "translations/vi/lessons/4-ComputerVision/08-TransferLearning/Dropout.ipynb",
     "translations/vi/lessons/4-ComputerVision/08-TransferLearning/TransferLearningPyTorch.ipynb",
     "translations/vi/lessons/4-ComputerVision/08-TransferLearning/TransferLearningTF.ipynb",
     "translations/vi/lessons/4-ComputerVision/08-TransferLearning/lab/OxfordPets.ipynb"
    ]
   },
   {
    "id": "4-ComputerVision/09-Autoencoders",
    "name": "Autoencoders",
    "doc": "translations/vi/lessons/4-ComputerVision/09-Autoencoders/README.md",
    "nb": [
     "translations/vi/lessons/4-ComputerVision/09-Autoencoders/AutoEncodersPyTorch.ipynb",
     "translations/vi/lessons/4-ComputerVision/09-Autoencoders/AutoencodersTF.ipynb"
    ]
   },
   {
    "id": "4-ComputerVision/10-GANs",
    "name": "Mạng Generative Adversarial (GAN)",
    "doc": "translations/vi/lessons/4-ComputerVision/10-GANs/README.md",
    "nb": [
     "translations/vi/lessons/4-ComputerVision/10-GANs/GANPyTorch.ipynb",
     "translations/vi/lessons/4-ComputerVision/10-GANs/GANTF.ipynb",
     "translations/vi/lessons/4-ComputerVision/10-GANs/StyleTransfer.ipynb",
     "translations/vi/lessons/4-ComputerVision/10-GANs/StyleTransfer_Keras.ipynb"
    ]
   },
   {
    "id": "4-ComputerVision/11-ObjectDetection",
    "name": "Phát Hiện Đối Tượng",
    "doc": "translations/vi/lessons/4-ComputerVision/11-ObjectDetection/README.md",
    "nb": [
     "translations/vi/lessons/4-ComputerVision/11-ObjectDetection/ObjectDetection.ipynb"
    ]
   },
   {
    "id": "4-ComputerVision/12-Segmentation",
    "name": "Phân đoạn",
    "doc": "translations/vi/lessons/4-ComputerVision/12-Segmentation/README.md",
    "nb": [
     "translations/vi/lessons/4-ComputerVision/12-Segmentation/SemanticSegmentationPytorch.ipynb",
     "translations/vi/lessons/4-ComputerVision/12-Segmentation/SemanticSegmentationTF.ipynb",
     "translations/vi/lessons/4-ComputerVision/12-Segmentation/lab/BodySegmentation.ipynb"
    ]
   }
  ]
 },
 {
  "key": "5-NLP",
  "label": "Xử lý ngôn ngữ",
  "desc": "Embedding, RNN, Transformer, NER, mô hình ngôn ngữ lớn",
  "lessons": [
   {
    "id": "5-NLP/README",
    "name": "Xử lý Ngôn ngữ Tự nhiên — tổng quan chương",
    "doc": "translations/vi/lessons/5-NLP/README.md",
    "nb": []
   },
   {
    "id": "5-NLP/13-TextRep",
    "name": "Đại diện Văn bản dưới dạng Tensors",
    "doc": "translations/vi/lessons/5-NLP/13-TextRep/README.md",
    "nb": [
     "translations/vi/lessons/5-NLP/13-TextRep/TextRepresentationPyTorch.ipynb",
     "translations/vi/lessons/5-NLP/13-TextRep/TextRepresentationTF.ipynb"
    ]
   },
   {
    "id": "5-NLP/14-Embeddings",
    "name": "Nhúng",
    "doc": "translations/vi/lessons/5-NLP/14-Embeddings/README.md",
    "nb": [
     "translations/vi/lessons/5-NLP/14-Embeddings/EmbeddingsPyTorch.ipynb",
     "translations/vi/lessons/5-NLP/14-Embeddings/EmbeddingsTF.ipynb"
    ]
   },
   {
    "id": "5-NLP/15-LanguageModeling",
    "name": "Mô hình Ngôn ngữ",
    "doc": "translations/vi/lessons/5-NLP/15-LanguageModeling/README.md",
    "nb": [
     "translations/vi/lessons/5-NLP/15-LanguageModeling/CBoW-PyTorch.ipynb",
     "translations/vi/lessons/5-NLP/15-LanguageModeling/CBoW-TF.ipynb"
    ]
   },
   {
    "id": "5-NLP/16-RNN",
    "name": "Mạng Nơ-ron Tái Phục Hồi",
    "doc": "translations/vi/lessons/5-NLP/16-RNN/README.md",
    "nb": [
     "translations/vi/lessons/5-NLP/16-RNN/RNNPyTorch.ipynb",
     "translations/vi/lessons/5-NLP/16-RNN/RNNTF.ipynb"
    ]
   },
   {
    "id": "5-NLP/17-GenerativeNetworks",
    "name": "Mạng tạo sinh",
    "doc": "translations/vi/lessons/5-NLP/17-GenerativeNetworks/README.md",
    "nb": [
     "translations/vi/lessons/5-NLP/17-GenerativeNetworks/GenerativePyTorch.ipynb",
     "translations/vi/lessons/5-NLP/17-GenerativeNetworks/GenerativeTF.ipynb"
    ]
   },
   {
    "id": "5-NLP/18-Transformers",
    "name": "Cơ chế Attention và Transformers",
    "doc": "translations/vi/lessons/5-NLP/18-Transformers/README.md",
    "nb": [
     "translations/vi/lessons/5-NLP/18-Transformers/TransformersPyTorch.ipynb",
     "translations/vi/lessons/5-NLP/18-Transformers/TransformersTF.ipynb"
    ]
   },
   {
    "id": "5-NLP/19-NER",
    "name": "Nhận diện Thực thể Được đặt tên",
    "doc": "translations/vi/lessons/5-NLP/19-NER/README.md",
    "nb": [
     "translations/vi/lessons/5-NLP/19-NER/NER-TF.ipynb"
    ]
   },
   {
    "id": "5-NLP/20-LangModels",
    "name": "Các Mô Hình Ngôn Ngữ Lớn Được Huấn Luyện Trước",
    "doc": "translations/vi/lessons/5-NLP/20-LangModels/README.md",
    "nb": [
     "translations/vi/lessons/5-NLP/20-LangModels/GPT-PyTorch.ipynb"
    ]
   }
  ]
 },
 {
  "key": "6-Other",
  "label": "Kỹ thuật khác",
  "desc": "Giải thuật di truyền, học tăng cường, đa tác tử",
  "lessons": [
   {
    "id": "6-Other/21-GeneticAlgorithms",
    "name": "Thuật toán Di truyền",
    "doc": "translations/vi/lessons/6-Other/21-GeneticAlgorithms/README.md",
    "nb": [
     "translations/vi/lessons/6-Other/21-GeneticAlgorithms/Diophantine.ipynb",
     "translations/vi/lessons/6-Other/21-GeneticAlgorithms/Genetic.ipynb"
    ]
   },
   {
    "id": "6-Other/22-DeepRL",
    "name": "Học Tăng Cường Sâu",
    "doc": "translations/vi/lessons/6-Other/22-DeepRL/README.md",
    "nb": [
     "translations/vi/lessons/6-Other/22-DeepRL/CartPole-RL-PyTorch.ipynb",
     "translations/vi/lessons/6-Other/22-DeepRL/CartPole-RL-TF.ipynb",
     "translations/vi/lessons/6-Other/22-DeepRL/notebook.ipynb",
     "translations/vi/lessons/6-Other/22-DeepRL/tmp.ipynb",
     "translations/vi/lessons/6-Other/22-DeepRL/lab/MountainCar.ipynb"
    ]
   },
   {
    "id": "6-Other/23-MultiagentSystems",
    "name": "Hệ Thống Đa Tác Nhân",
    "doc": "translations/vi/lessons/6-Other/23-MultiagentSystems/README.md",
    "nb": []
   }
  ]
 },
 {
  "key": "7-Ethics",
  "label": "Đạo đức AI",
  "desc": "Làm AI có trách nhiệm",
  "lessons": [
   {
    "id": "7-Ethics/README.md",
    "name": "AI Đạo Đức và Trách Nhiệm",
    "doc": "translations/vi/lessons/7-Ethics/README.md",
    "nb": []
   }
  ]
 },
 {
  "key": "X-Extras",
  "label": "Mở rộng",
  "desc": "Đa phương thức (multimodal)",
  "lessons": [
   {
    "id": "X-Extras/X1-MultiModal",
    "name": "Mạng Đa Phương Thức",
    "doc": "translations/vi/lessons/X-Extras/X1-MultiModal/README.md",
    "nb": [
     "translations/vi/lessons/X-Extras/X1-MultiModal/Clip.ipynb"
    ]
   }
  ]
 },
 {
  "key": "sketchnotes",
  "label": "Sketchnote",
  "desc": "Ghi chú hình ảnh tóm tắt khoá học",
  "lessons": [
   {
    "id": "sketchnotes/LICENSE.md",
    "name": "LICENSE.md",
    "doc": "translations/vi/lessons/sketchnotes/LICENSE.md",
    "nb": []
   },
   {
    "id": "sketchnotes/README.md",
    "name": "README.md",
    "doc": "translations/vi/lessons/sketchnotes/README.md",
    "nb": []
   }
  ]
 }
];
