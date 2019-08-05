# ocr_systems
Ocr Systems comming soon

The necessity of Digitization is rapidly increasing in the modern era. Due to the growth of information and communication technologies (ICT) and the wide availability of handheld devices, people often prefer digitized content over the printed materials including books and newspaper. Also, it is easier to organize digitized data and analyze them for various purposes with many
advanced techniques like Artificial Intelligence etc. So in order to keep up with present technological scenario it is necessary to convert all the information till now which is in the printed format to Digitized format.
So, Here comes OCR ….Our Saviour💪 💪 which helps us in performing the tedious work of digitizing the information.
OCR stands for Optical Character Recognition, whose primary job is to recognise the printed text in an image. Once we recognise the printed text with the help of OCR, we can use that information in various types.


Let’s start our topic OCR and will try to understand the basics of working of a OCR.

A basic overview of Phases in OCR :-
A. Image acquisition
This involves scanning a document and storing it as an image on which recognition has to be performed.
B. Pre-Processing
We cannot give an image as input, directly for OCR system. Some Pre-processing on the image has to be done so that it becomes somewhat easy for OCR to recognise the information in the image. It is like getting dressed 
up according to the occasion.
Pre-processing of image includes:
1. Skew Correction: Image obtained from the previous stage may not be correctly oriented, It may be aligned at any angle. So we need to perform Skew correction to make sure that the image forwarded to subsequent
stages is correctly oriented.


Binarization : It means converting a Coloured image to Binary image(Containing only black & white colours). Usually in practice, This conversion of Coloured image to Binary image is done by creating a intermediate grayscale image.
Coloured image -> Gray Scale image -> Binary image
This can be done using different methods like
-> Adaptive Thresholding
-> Otsu’s Binarization
-> Local Maxima and Minima Method
I personally prefer Adaptive Thresholding, As it binarizes the image with threshold which is fixed dynamically depending upon its locality in image.
3. Noise Removal : Noise (small dots or foreground components) may be introduced easily into an image while scanning it during Image Acquisition due to low clarity camera, Shadow on image etc.
This noise should be removed so that the image will be clean and uniform.
4. Thinning and Skeletonization : Different images have words in it with different width of strokes. This variability is very high in the case of hand written words. So by using Skeletonization techniques, we can make
all strokes to have uniform width( Maybe 1 pixel wide or few pixels wide)


C. Segmentation
After the Preprocessing stage, a ‘clean’ image is obtained. The next stage is segmentation. Segmentation is nothing but breaking the whole image into subparts to further process them.
For OCR three types of segmentation can be done :-
-> Line level Segmentation
-> Word level Segmentation
-> Character level Segmentation
D. Feature Extraction
In this phase we extract some Unique Features of the segmented subcomponents obtained from previous stage. There are many techniques through which we can extract features like its shape, its strokes etc.
But now a days for feature extraction we mostly rely on Machine learning models like using a stack of CNN,RNN(Recurrent Neural Networks),LSTM(Long Short term memory) layers.
E.Classification
The decision making stage of an OCR system is Classification Stage. Classification uses the features extracted in the feature extraction stage to identify the text segment.
Apart from these phases, To improve the performance of OCR we can also perform an optional Post Processing step after the Classification stage.
F. Post-processing
The most probable errors that would occur in OCR system, is due to wrong prediction in classification stage(this may be due to poor feature extraction, lot of noise in pic etc). In majority of the cases these prediction errors will result in small spelling mistakes(like the word ‘ball’ is predicted as ‘boll’). So these type of spelling mistakes can be corrected using language models, Word2Vec models(like CBOW and skip gram) etc.
In this post you got an overview of OCR system. Explanation of Important Phases of OCR is in the subsequent articles about Pre-Processing Phase, Segmentation Phase.
