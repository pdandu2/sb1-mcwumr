import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-actionplans',
	templateUrl: './actionplans.component.html',
	styleUrls: ['./actionplans.component.scss']
})
export class ActionPlansComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		console.log(this.actionItemsData[0].Questions)
	}

	public actionItemsData = [
		
		{
			disorders: 'Clinical disorders',
			Content1: 'A mental health disorder characterized by persistently depressed mood or loss of interest in activities, causing significant impairment in daily life.',
			Content2: 'Possible causes include a combination of biological, psychological, and social sources of distress. Increasingly, research suggests these factors may cause changes in brain function, including altered activity of certain neural circuits in the brain. The persistent feeling of sadness or loss of interest that characterizes major depression can lead to a range of behavioral and physical symptoms. These may include changes in sleep, appetite, energy level, concentration, daily behavior, or self-esteem. Depression can also be associated with thoughts of suicide.',
			Content3: 'The mainstay of treatment is usually medication, talk therapy, or a combination of the two. Increasingly, research suggests these treatments may normalize brain changes associated with depression.',
			
			
		},
		{
			disorders: 'Anxiety disorders',
			Content1: 'A mental health disorder characterized by feelings of worry, anxiety, or fear that are strong enough to interfere with one daily activities Examples of anxiety disorders include panic attacks, obsessive-compulsive disorder, and post-traumatic stress disorder.',
			Content2: 'Symptoms include stress thats out of proportion to the impact of the event, inability to set aside a worry, and restlessness. Treatment includes counseling or medications, including antidepressants.',
			Content3: '',
			Questions:{

			}
			
		},
		{
			disorders: 'Bipolar disorders',
			Content1: 'A disorder associated with episodes of mood swings ranging from depressive lows to manic highs. The exact cause of bipolar disorder isn’t known, but a combination of genetics, environment, and altered brain structure and chemistry may play a role. Manic episodes may include symptoms such as high energy, reduced need for sleep, and loss of touch with reality. Depressive episodes may include symptoms such as low energy, low motivation, and loss of interest in daily activities. Mood episodes last days to months at a time and may also be associated with suicidal thoughts.',
			Content2: 'Treatment is usually lifelong and often involves a combination of medications and psychotherapy.',
			Content3: ''
		},
		{
			disorders: 'Dementia',
			Content1: 'A group of thinking and social symptoms that interferes with daily functioning.',
			Content2: 'Not a specific disease, dementia is a group of conditions characterized by impairment of at least two brain functions, such as memory loss and judgment. Symptoms include forgetfulness, limited social skills, and thinking abilities so impaired that it interferes with daily functioning.',
			Content3: 'Medications and therapies may help manage symptoms. Some causes are reversible.'
		},
		{
			disorders: 'Anxiety disorders',
			Content1: 'A chronic condition including attention difficulty, hyperactivity, and impulsiveness. ADHD often begins in childhood and can persist into adulthood. It may contribute to low self-esteem, troubled relationships, and difficulty at school or work. Symptoms include limited attention and hyperactivity.',
			Content2: 'Treatments include medication and talk therapy.',
			Content3: ''
		},
		{
			disorders: 'Attention-deficit/hyperactivity disorder',
			Content1: 'A chronic condition including attention difficulty, hyperactivity, and impulsiveness. ADHD often begins in childhood and can persist into adulthood. It may contribute to low self-esteem, troubled relationships, and difficulty at school or work. Symptoms include limited attention and hyperactivity.',
			Content2: 'Treatments include medication and talk therapy.',
			Content3: ''
		},
		{
			disorders: 'Schizophrenia',
			Content1: 'A disorder that affects a persons ability to think, feel, and behave clearly. The exact cause of schizophrenia isnt known, but a combination of genetics, environment, and altered brain chemistry and structure may play a role.',
			Content2: 'Schizophrenia is characterized by thoughts or experiences that seem out of touch with reality, disorganized speech or behavior, and decreased participation in daily activities. Difficulty with concentration and memory may also be present.',
			Content3: 'Treatment is usually lifelong and often involves a combination of medications, psychotherapy, and coordinated specialty care services.'
		},
		{
			disorders: 'Obsessive compulsive disorder',
			Content1: 'Excessive thoughts (obsessions) that lead to repetitive behaviors (compulsions). Obsessive-compulsive disorder is characterized by unreasonable thoughts and fears (obsessions) that lead to compulsive behaviors. OCD often centers on themes such as a fear of germs or the need to arrange objects in a specific manner. Symptoms usually begin gradually and vary throughout life.',
			Content2: 'Treatment includes talk therapy, medications, or both.',
			Content3: ''
		},
		{
			disorders: 'Autism',
			Content1: 'A serious developmental disorder that impairs the ability to communicate and interact. Autism spectrum disorder impacts the nervous system. The range and severity of symptoms can vary widely. Common symptoms include difficulty with communication, difficulty with social interactions, obsessive interests, and repetitive behaviors.',
			Content2: 'Early recognition, as well as behavioral, educational, and family therapies may reduce symptoms and support development and learning.',
			Content3: ''
		},
		{
			disorders: 'Post-traumatic stress disorder',
			Content1: 'A disorder in which a person has difficulty recovering after experiencing or witnessing a terrifying event. The condition may last months or years, with triggers that can bring back memories of the trauma accompanied by intense emotional and physical reactions.',
			Content2: 'Symptoms may include nightmares or unwanted memories of the trauma, avoidance of situations that bring back memories of the trauma, heightened reactions, anxiety, or depressed mood. Treatment includes different types of trauma-focused psychotherapy as well as medications to manage symptoms.',
			Content3: ''
		},
		{
			disorders: 'test disorders',
			Content1: '',
			Content2: '',
			Content3: ''
		},
		{
			disorders: 'test disorders',
			Content1: '',
			Content2: '',
			Content3: ''
		}
	];
}
